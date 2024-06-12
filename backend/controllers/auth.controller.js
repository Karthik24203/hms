import pool from "../DB/db.js";
import bcrypt from "bcryptjs";

import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, usn, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const student = await pool.query(`SELECT * FROM students WHERE usn = $1`, [
      usn,
    ]);

    if (student.rows.length > 0) {
      return res.status(400).json({ error: "usn alreeady exists " });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStudent = await pool.query(
      `INSERT INTO students(name, usn, password) VALUES($1,$2,$3) RETURNING *`,
      [name, usn, hashedPassword]
    );

    // const sendData = await pool.query(`SELECT * FROM students WHERE usn = $1`, [
    //   usn,
    // ]);
    const data = newStudent.rows[0];

    if (newStudent.rows[0].length != 0) {
      delete data.password;

      generateTokenAndSetCookie(data.id, res);

      res.status(201).json({ data });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

    console.log(data);
  } catch (error) {
    console.log("Error in signing up ", error.message);
    res.status(500).json({ error: "internal server error in signup" });
  }
};

export const login = async (req, res) => {
  try {
    const { usn, password } = req.body;

    const student = await pool.query(`SELECT * FROM students WHERE usn = $1`, [
      usn,
    ]);

    if (student.rows.length === 0) {
      return res.status(400).json({ error: "incorrect password or usn " });
    }

    const studentPassword = student.rows[0].password;

    const isPasswordCorrect = await bcrypt.compare(password, studentPassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "incorrect password or usn" });
    }

    const data = student.rows[0];

    delete data.password;

    generateTokenAndSetCookie(data.id, res);

    console.log(data);
    res.status(201).json({ data });
  } catch (error) {
    console.log("Error in loging up ", error.message);
    res.status(500).json({ error: "internal server error in loging" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in loging up ", error.message);
    res.status(500).json({ error: "internal server error in loging" });
  }
};
