import bcrypt from "bcrypt";

import connection from "../database.js";

export async function checkEmail(email){

    const existingUsers = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
        );
        if (existingUsers.rowCount > 0) {
            throw {
                type: "emailAlreadInUse", message: "Este email jah esta em uso"
            };
        }
};

export async function createUser(password, name, email){
    const hashedPassword = bcrypt.hashSync(password, 12);
    await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
    );
};

export async function checkPassword(email, password){
    const { rows } = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
      const [user] = rows;
  
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw{ type: "wrongCredentials", message: "Email ou senha incorretos"}
    }
    return user
}