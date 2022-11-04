const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
    const mail = {
        to: email,
        subject: "Підтвердження реєстрації",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}"></a>`
    };
    return mail;
}

module.exports = createVerifyEmail;