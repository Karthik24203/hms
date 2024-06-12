import pool from "../DB/db.js";

export const getLeaveDetail = async (req, res) => {
  const studentid = req.user.id;

  const leaveDetail = await pool.query(
    `SELECT * FROM leaverequest WHERE student_id = $1`,
    [studentid]
  );

  console.log(leaveDetail.rows);
  res.status(201).json(leaveDetail.rows);
};
export const getLateDetail = async (req, res) => {
  const studentid = req.user.id;

  const lateDetail = await pool.query(
    `SELECT * FROM latearrival WHERE student_id = $1`,
    [studentid]
  );

  console.log(lateDetail.rows);
  res.status(201).json(lateDetail.rows);
};
export const getDamageDetail = async (req, res) => {
  const studentid = req.user.id;

  const damageDetail = await pool.query(
    `SELECT * FROM damagereport WHERE student_id = $1`,
    [studentid]
  );

  console.log(damageDetail.rows);
  res.status(201).json(damageDetail.rows);
};
export const getComplaintDetail = async (req, res) => {
  const studentid = req.user.id;

  const complaintDetail = await pool.query(
    `SELECT * FROM complaintrequest WHERE student_id = $1`,
    [studentid]
  );

  console.log(complaintDetail.rows);
  res.status(201).json(complaintDetail.rows);
};
