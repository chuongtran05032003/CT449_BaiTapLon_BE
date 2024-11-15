const { body } = require('express-validator');

const passwordValidation = [
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
];

module.exports = {
    registerValidator: [
        body('email')
            .trim()
            .isEmail()
            .withMessage('Please provide a valid email address')
            .normalizeEmail()
            .toLowerCase(),
        ...passwordValidation,
        body('password2').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    ],
};
