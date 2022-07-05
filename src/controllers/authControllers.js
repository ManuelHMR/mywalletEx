

import { checkEmail, createUser, checkPassword } from "../repositories/userRepositories.js";
import generateToken from "../services/generateToken.js";

export async function signUp (req, res) {
    const{email, name, password} = req.body;
    checkEmail(email);
    createUser(password, name, email);
    res.sendStatus(201);
};

export async function signIn (req, res) {
    const { email, password } = req.body;
    const user = checkPassword(email, password);
    const token = generateToken()
    res.send({
    token,
    });
};