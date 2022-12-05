import { db } from "../connect.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
export const register = (req, res) => {
  //check user if exists

  const q = "SELECT FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("user already exists");
    //create a new user
    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";
    // const values =eckout
    // db.query(q,[req.body.username]
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
