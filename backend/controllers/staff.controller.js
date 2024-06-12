import pool from "../DB/db.js";

export const StaffreqDetail = async (req, res) => {
  const { refid } = req.params;
  const { name: category } = req.params;

  if (category == "LateRequest") {
    const staffreq = await pool.query(
      `SELECT * FROM latearrival WHERE id = $1`,
      [refid]
    );

    console.log(staffreq.rows);
  } else if (category == "Complaint") {
    const staffreq = await pool.query(
      `SELECT * FROM complaintrequest WHERE id = $1`,
      [refid]
    );

    console.log(staffreq.rows);
  } else if (category == "DamageReport") {
    const staffreq = await pool.query(
      `SELECT * FROM damagereport WHERE id = $1`,
      [refid]
    );

    console.log(staffreq.rows);
  } else if (category == "LeaveRequest") {
    const staffreq = await pool.query(
      `SELECT * FROM leaverequest WHERE id = $1`,
      [refid]
    );

    console.log(staffreq.rows);
  }
};
export const StaffreqUpdate = async (req, res) => {};
