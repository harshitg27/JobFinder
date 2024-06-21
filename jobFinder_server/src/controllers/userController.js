const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function handleLogin() {
    return async (req, res, next) => {

        try {
            const { email, password } = req.body;
            // email = email.toLowerCase()
            // throw new Error('Login Error')
            const existingUser = await User.findOne({ email: email });
            if (!existingUser) {
                return res.status(400).json({
                    status: 'Failed',
                    message: 'User Not Found',
                });
            }
            const passwordMatch = await bcrypt.compare(password, existingUser.password);
            if (!passwordMatch) {
                return res.status(400).json({
                    status: 'Failed',
                    message: 'Incorrect Password',
                });

            }
            const jwToken = jwt.sign({ id: existingUser._id }, process.env.JWT_Private_Key);
            res.status(200).json({
                status: 'Success',
                message: 'Login successfully',
                userToken: jwToken
            });
        } catch (err) {
            next("Error Logging In", err);
        }
    };
}

function registerUser() {
    return async (req, res, next) => {

        try {
            const { name, email , mobileNum , password } = req.body;
            // throw new Error('creating Register Page Error')
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({
                    message: "User already Exist Please use another Email "
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                name,
                email,
                mobileNum ,
                password: hashedPassword,
            });
            await newUser.save();
            const jwToken = jwt.sign({ id : newUser._id }, process.env.JWT_Private_Key);
            res.status(201).json({
                status: 'Success',
                message: 'User created successfully',
                token: jwToken
            });

        } catch (error) {
            next("Error For Creating User", error);
        }
    };
}

module.exports = {
    handleLogin ,
    registerUser
}