const { JsonModel, UserModel } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const salt = 10;
const { JWT_SECRET } = process.env;
module.exports = {
    async login(req, res, next) {
        const { email, password } = req.body;
        // we made a function to verify our user login
        try {
            const user = await UserModel.findOne({ email }).lean();
            if (!user) {
                throw { status: "error", error: "user not found" };
            }
            if (await bcrypt.compare(password, user.password)) {
                // creating a JWT token
                token = jwt.sign(
                    { id: user._id, email: user.email, type: "admin" },
                    JWT_SECRET
                );
                res.send({ token });
            } else {
                throw { status: "error", error: "invalid password" };
            }
        } catch (e) {
            res.status(401).json({ status: e.status, error: e.error });
        }
    },

    async signup(req, res, next) {
        // geting our data from frontend
        const { email, password: plainTextPassword } = req.body;
        // encrypting our password to store in database
        const password = await bcrypt.hash(plainTextPassword, salt);
        try {
            // storing our user data into database
            const response = await UserModel.create({
                email,
                password,
            });
            return res.redirect("/login");
        } catch (error) {
            console.log(JSON.stringify(error));
            if (error.code === 11000) {
                return res.send({ status: "error", error: "email already exists" });
            }
            throw error;
        }
    },
    async verifyToken(req, res, next) {
        try {
            const bearerHeader = req.headers["authorization"];
            if (bearerHeader) {
                const bearer = bearerHeader.split(" ");
                const token = bearer[1];
                const verify = jwt.verify(token, JWT_SECRET);
                res.status(201).send('OK')
            } else {
                throw 'invalid token'
            }
        } catch (error) {
            console.log(error)
            res.status(403).send('KO')
        }

    },
    async isAuthorized(req, res, next) {
        try {
            const bearerHeader = req.headers["authorization"];
            if (bearerHeader) {
                const bearer = bearerHeader.split(" ");
                const token = bearer[1];
                const verify = jwt.verify(token, JWT_SECRET);
                req.user = verify.email;
                next();
            } else {
                throw 'invalid token'
            }
        } catch (error) {
            console.log(error)
            res.status(403).end()
        }
    },
};
