import { verification, forget } from '../../utils/template';
import { BACKEND_ACCESS_TOKEN, EMAIL_SERVICE, EMAIL_ADDRESS, CONTACT_EMAIL_ADDRESS } from '../../../config/global.json'
import crypto from 'crypto';
import BackendService from '../backend';
import Sendgrid from './sendgrid';
import SMTP from './smtp';

type Provider = "sendgrid" | "smtp"
class EmailService {
  private data = null
  private backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  });
  private provider = null

  constructor(user?) {
    if (user) {
      this.setData(user);
    }
    this.setProvider(<Provider>EMAIL_SERVICE)
  }

  public setData = (user) => {
    if (user) {
      this.data = user;
    }
  }

  public setProvider = (provider: Provider) => {
    if(provider == "sendgrid") this.provider = new Sendgrid()
    else if(provider == "smtp") this.provider = new SMTP()
  }

  /**
   * sendVerificationEmail
   */
  public sendVerificationEmail = async () => {
    const user = this.data;

    try {
      const token = this.generateToken()

      await this.backend.create({
        tableName: "email-verifications",
        body: {
          token,
          email: user.email,
          userId: user.id
        }
      })

      console.log("Sending email...")

      const response = await this.provider.sendMail({
        to: user.email,
        subject: "Verify your email",
        html: verification(token)
      });

      console.log("Email sent: " + response)

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * sendForgetPassword
   */
  public sendForgetPassword = async () => {
    const user = this.data;

    try {
      const token = this.generateToken()

      await this.backend.create({
        tableName: "forgot-passwords",
        body: {
          token,
          email: user.email,
          userId: user.id
        }
      })

      console.log("Sending email...")

      const response = await this.provider.sendMail({
        to: user.email,
        subject: "Verify your email",
        html: forget(token)
      });

      console.log("Email sent: " + response)

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public sendContact = async ({ name, email, subject, body }) => {
    try {

      console.log("Sending email...")

      const response = await this.provider.sendMail({
        sender: name,
        to: CONTACT_EMAIL_ADDRESS,
        subject: `Message from ${email}: ${subject}`,
        html: `<b>Sender: ${name} (${email})</b>
        <br/>
        ${body}
        `,
      });

      console.log("Email sent: " + response)

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  private generateToken = () => (crypto.randomBytes(12)).toString('hex')
}

export default EmailService;