const User = require('../models/userModel');
const { generateToken } = require('../utils/jwt');

// Registrazione di un nuovo utente
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });

    try {
        const user = await newUser.save();
        const token = generateToken(user._id); // Genera il token
        res.status(201).json({ message: 'User registered successfully', user, token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login dell'utente
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id); // Genera il token
    res.status(200).json({ message: 'Login successful', token });
};
