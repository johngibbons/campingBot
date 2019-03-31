import path from 'path';
import { EmailTemplate } from 'email-templates';
import fs from 'fs';
import sendgrid, { mail } from 'sendgrid';

const sg = sendgrid(process.env.SENDGRID_API_KEY);

const templateDir = path.join(__dirname, 'templates', 'daily-update');
const template = new EmailTemplate(templateDir);

module.exports = async (emailAddress, newAvailabilities, campsiteFinder) => {
  try {
    const email = await template.render(
      { campsiteFinder, newAvailabilities },
      (err, results) => {
        const fromEmail = new mail.Email('john@campsitefinder.com');
        const toEmail = new mail.Email(emailAddress);
        const subject = `New Availabilities at ${
          campsiteFinder.campgroundId.placeName
        } ${campsiteFinder.campgroundId.facilityName}`;
        const content = new mail.Content('text/html', results.html);
        const emailObj = new mail.Mail(fromEmail, subject, toEmail, content);

        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: emailObj.toJSON()
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
