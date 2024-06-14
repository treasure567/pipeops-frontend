const randomToken = require('rand-token');
const gravatar = require('gravatar');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { login } = require('../../utils/validator/auth');

exports.loginUser = async(req, res) => {
    const { email, password } = req.body;
    let { errors, valid } = signin(email, password);
    if (!valid) {
        return response(res, 401, { status: false, message: "Invalid input", errors });
    }
    let user = await User.findOne({ email }).populate(levelObejct());
    if (!user) {
        errors['email'] = "Invalid email address";
        return response(res, 401, { status: false, message: "Invalid email address or password", errors });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        errors['password'] = "Incorrect password";
        return response(res, 401, { status: false, message: "Invalid email address or password", errors });
    }
    const token = genereteToken(user._id);
    
    if (!user.email_verified) {
        const email_otp = randomToken.generator({ chars: '0-9' }).generate(6);
        await User.updateOne({ _id: user._id }, { email_otp: email_otp });
        user = await User.findOne({ email });
        try {
            const sendMail = await veriyEmail(user.email, 'TabNovel | Email Verification', `Your verification OTP is ${email_otp}`, email_otp);
            if (sendMail) {
                console.log('Verification email sent successfully');
            }
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    }
    const userWithoutHiddenFields = _.pick(user.toObject(), userDetail());
    return response(res, 200, { status: true, message: "Authentication successful", token, data: userWithoutHiddenFields, errors });
}