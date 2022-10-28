const bcrypt = require('bcrypt');

const { schemas, User } = require('../../models/user');
const {RequestError} = require('../../helpers');

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
    const newUser = await User.create({ password: hashPassword, email, subscription });
    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    })
}

module.exports = register;