import express from "express";
import UsersController from "../config/userController.mjs";
const usersRouter = express.Router();

const users = new UsersController();

usersRouter.post("/signup", users.signup);
usersRouter.post("/login", users.login);

export default usersRouter;