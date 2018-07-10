const path = require('path');
const { EmailTemplate } = require('email-templates');
const fs = require('fs');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

const templateDir = path.join(__dirname, 'templates', 'daily-update');
const template = new EmailTemplate(templateDir);

module.exports = async (emailAddress, newAvailabilities, campsiteFinder) => {
  try {
    const email = await template.render(
      { campsiteFinder, newAvailabilities },
      (err, results) => {
        const fromEmail = new helper.Email('john@campsitefinder.com');
        const toEmail = new helper.Email(emailAddress);
        const subject = `New Availabilities at ${
          campsiteFinder.campgroundId.placeName
        } ${campsiteFinder.campgroundId.facilityName}`;
        const content = new helper.Content('text/html', results.html);
        const mail = new helper.Mail(fromEmail, subject, toEmail, content);

        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON()
        });

        sg.API(request, (error, response) => {
          if (error) {
            console.log('Error response received');
          }
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
        });
      }
    );

    fs.writeFileSync('preview.html', email.html);
  } catch (e) {
    console.log('Error sending email:', e);
  }
};
