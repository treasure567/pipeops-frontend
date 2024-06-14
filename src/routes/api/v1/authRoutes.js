const router = require('express').Router();

const authController = require("../../../controllers/Auth/authController");

module.exports = app => {
    router.post("/auth/login", authController.loginUser);

    app.use('/api/v1', router);
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            status: false,
            message: err.message
        });
        next();
    });
}