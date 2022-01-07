import { SendgridOption } from "../../types"
import { SENDGRID_API_KEY, EMAIL_ADDRESS } from "../../../config/global.json"

const sgMail = require('@sendgrid/mail')

class Sendgrid {

  constructor() {
    sgMail.setApiKey(SENDGRID_API_KEY)
  }

  public sendMail = async (option: SendgridOption) => {
    try {
      const msg = {
        from: EMAIL_ADDRESS,
        ...option
      }

      const response = await sgMail.send(msg)

      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e.response?.body);
    }
  }

}

export default Sendgrid;