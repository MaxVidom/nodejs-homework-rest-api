const sgMail = require('@sendgrid/mail');

const { SENDGRID_AOI_KEY } = process.env;

sgMail.setApiKey(SENDGRID_AOI_KEY);

const sendEmail = async (data) => {
    const mail = { ...data, from: "MaxVdomenko@gmail.comm" };
    await sgMail.send(mail);
    return true;
}

module.exports = sendEmail;