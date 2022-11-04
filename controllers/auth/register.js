const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const { schemas, User } = require('../../models/user');
const { RequestError, sendEmail, createVerifyEmail } = require('../../helpers');



const register = async (req, res) => {
    const {error} = schemas.registerSchema.validate(req.body)
    if (error) {
        throw RequestError(400, 'missing required name field');
    }
    const { password, email, subscription } = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw RequestError(409, "Email in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const newUser = await User.create({ password: hashPassword, email, subscription, avatarURL, verificationToken });
    const mail = createVerifyEmail(email, verificationToken);
    await sendEmail(mail);
    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    })
}

module.exports = register;