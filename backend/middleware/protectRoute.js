import jwt from "jsonwebtoken";
import pool from "../DB/db.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const studentId = decoded.userId;

    const user = await pool.query(`SELECT * FROM students WHERE id= $1`, [
      studentId,
    ]);
    delete user.password;

    if (user.rows[0].length == 0) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user.rows[0];

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware :", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
