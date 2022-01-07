import nodemailer from 'nodemailer';
import { EMAIL_ADDRESS, EMAIL_PASSWORD, CONTACT_EMAIL_ADDRESS, CONTACT_EMAIL_PASSWORD, SMTP_HOST, SMTP_PORT } from "../../../config/global.json"
import { SendgridOption } from '../../types';

class SMTP {

  constructor() {
  }

  public sendMail = async (option: SendgridOption) => {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
          user: EMAIL_ADDRESS,
          pass: EMAIL_PASSWORD,
        },
      });
  
      const mailOptions = {
        from: EMAIL_ADDRESS,
        ...option
      }
  
      const { response } = await transporter.sendMail(mailOptions);
      return response;
    } catch (error) {
      return error;
    }
  };

}

export default SMTP;