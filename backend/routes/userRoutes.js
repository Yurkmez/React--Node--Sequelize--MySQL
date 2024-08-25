import { Router } from 'express';
import db from '../modelDB/index';

const router = Router();
const User = db.User;

// Создание новой задачи
router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
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
