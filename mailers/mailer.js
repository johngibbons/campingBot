const path = require('path')
const templateDir = path.join(__dirname, 'templates', 'daily-update')
const EmailTemplate = require('email-templates').EmailTemplate
const fs = require('fs')
const async = require('async')
const helper = require('sendgrid').mail
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const moment = require('moment')

const template = new EmailTemplate(templateDir)

// Send 10 mails at once

module.exports = emailAddressesObj => {
  const emailAddresses = Object.keys(emailAddressesObj)
  if (emailAddresses.length === 0) return
  async.mapLimit(
    emailAddresses,
    10,
    (emailAddress, next) => {
      template.render(
        { campgrounds: emailAddressesObj[emailAddress] },
        (err, results) => {
          if (err) return next(err)
          const fromEmail = new helper.Email('john@campsitefinder.com')
          const toEmail = new helper.Email(emailAddress)
          const subject = `Daily Campsite Update ${moment().format(
            'MMMM Do YYYY, h:mm a'
          )}`
          const content = new helper.Content('text/html', results.html)
          const mail = new helper.Mail(fromEmail, subject, toEmail, content)

          const request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          })

          sg.API(request, (error, response) => {
            if (error) {
              console.log('Error response received')
            }
            console.log(response.statusCode)
            console.log(response.body)
            console.log(response.headers)
          })
        }
      )
    },
    err => {
      if (err) {
        console.error(err)
      }
      console.log('Succesfully sent %d messages', emailAddresses.length)
    }
  )
  const templates = Object.keys(emailAddressesObj).map(emailAddress => {
    return template.render({ campgrounds: emailAddressesObj[emailAddress] })
  })

  Promise.all(templates).then(results => {
    console.log(results[0])
    fs.writeFile('preview.html', results[0].html)
  })
}
