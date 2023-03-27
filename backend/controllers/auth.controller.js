const User = require('../models/user.model');

exports.userRegister = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    let user;
    try {
        let doesExists = await User.findOne({ email: email });
        if (doesExists) {
            return res.json({ message: 'user email exists, please login instead' })
        } else {
            const newUser = new User({
                email,
                password
            });
            user = await newUser.save();
        }
    } catch (err) {
        console.log(err);
    }
    console.log(user);
    if (!user) {
        return res.status(500).json({ message: 'something went wrong' })
    } else {
        return res.status(201).json({ user })
    }
}