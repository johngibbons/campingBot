const helper = require('sendgrid').mail
const fromEmail = new helper.Email('test@example.com')
const toEmail = new helper.Email('johngibbons10@gmail.com')
const subject = 'Hello World from the SendGrid Node.js Library!'
const content = new helper.Content('text/plain', 'Hello, Email!')
const mail = new helper.Mail(fromEmail, subject, toEmail, content)

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
})

sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received')
  }
  console.log(response.statusCode)
  console.log(response.body)
  console.log(response.headers)
})
