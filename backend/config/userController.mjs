import User from "../models/user.mjs";
import hashPassword from "../helpers/hashPassword.mjs";
import comparePasswords from "../helpers/comparePassword.mjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class UsersController {


    async signup(req, res) {
        try {
            let user = await User.findOne({ name: req.body.name });

            if (user) {
                return res.status(400).json({
                    error: true,
                    message: "Name is already in use",
                });
            }

            const hashedPassword = await hashPassword(req.body.password);

            user = new User({
                name: req.body.name,
                password: hashedPassword,
            });

            await user.save();

            // Generate a JWT token
            const payload = {
                user: {
                    id: user.id,
                    name: user.name,
                    bookmark: user.bookmark,
                    notes: user.notes
                },
            };


            jwt.sign(
                payload,
                process.env.JWT_KEY,
                { expiresIn: '7 days' },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Cannot Sign up",
            });
        }
    }

    async login(req, res) {
        try {
            let user = await User.findOne({ name: req.body.name });

            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "Account not found",
                });
            }

            const isValid = await comparePasswords(req.body.password, user.password);

            if (!isValid) {
                return res.status(400).json({
                    error: true,
                    message: "Invalid password",
                });
            }
            console.log(user.id);
            // Generate a JWT token
            const payload = {
                user: {
                    id: user.id,
                    name: user.name,
                    bookmark: user.bookmark,
                    notes: user.notes
                }
            };

            jwt.sign(
                payload,
                process.env.JWT_KEY,
                { expiresIn: '7 days' },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Couldn't login. Please try again.",
            });
        }
    }
}

export default UsersController;
