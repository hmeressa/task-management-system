import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  async sendEmailNotification(
    from: string,
    to: string,
    subject: string,
    body: string,
    cc: string,
  ): Promise<any> {
    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: body,
      cc,
    };

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hmkahsay@gmail.com',
        pass: 'ylzsrnlbwmzgeohn',
      },
    });

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  }
}
