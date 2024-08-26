const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/userModel.js');

const router = Router();

// Создание нового пользователя
router.post('/add', async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.firstName, 10);
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
        });
        res.status(201).json({ user });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error',
        });
    }
});

module.exports = router;
