const UsersModel = require('../models/usersModel');
const bcrypt = require('bcryptjs');

const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "email and password required" });
        }

        //Check Email already exists
        const userEmail = await UsersModel.findOne({ email });
        if (userEmail) {
            return res.status(422).json({ error: "email already exists" });
        }

        //Password Hash
        const hashedPassword = await bcrypt.hash(password, 11);

        //Save into DB
        await new UsersModel({
            email,
            password: hashedPassword
        }).save();

        return res.status(200).json({ message: "Signup success, you can login now." });
    } catch (error) {
        res.status(400).json({ error: 'internal server error: ' + error })
    }
}

module.exports = { signupUser };