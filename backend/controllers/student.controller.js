import pool from "../DB/db.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const studentLateRequest = async (req, res) => {
  try {
    const { room_number, subject, reason } = req.body;
    const studentid = req.user.id;
    const category = "LateRequest";

    const permissionLetterUrl = req.file
      ? await uploadOnCloudinary(req.file.path)
      : null;

    const lateRequest = await pool.query(
      `INSERT INTO LateArrival (student_id, room_number, subject, reason, upload_permission_letter)
          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [studentid, room_number, subject, reason, permissionLetterUrl]
    );

    const lr = lateRequest.rows[0];
    const req_ref_id = lr.id;

    const lateReqSend = await pool.query(
      `INSERT INTO staffrequests(student_id, category, request_reference_id) VALUES($1, $2, $3) RETURNING *`,
      [studentid, category, req_ref_id]
    );

    res.status(201).json({ message: "Message sent successfully", lr });
  } catch (error) {
    console.error("Error Late Request", error.message);
    res.status(500).json({ error: "Internal server error in Late Request" });
  }
};

export const studentLeaveLetter = async (req, res) => {
  try {
    const { room_number, subject, body } = req.body;
    const studentid = req.user.id;
    const category = "LeaveRequest";

    const permissionLetterUrl = req.file
      ? await uploadOnCloudinary(req.file.path)
      : null;

    const leaveRequest = await pool.query(
      `INSERT INTO leaverequest (student_id, room_number, subject, body, upload_permission_letter)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [studentid, room_number, subject, body, permissionLetterUrl]
    );

    const lr = leaveRequest.rows[0];
    const req_ref_id = lr.id;

    console.log(lr);

    const leaveReqSend = await pool.query(
      `INSERT INTO staffrequests(student_id, category, request_reference_id) VALUES($1, $2, $3) RETURNING *`,
      [studentid, category, req_ref_id]
    );

    res.status(201).json({ message: "Message sent successfully", lr });
  } catch (error) {
    console.error("Error LEAVE LETTER", error.message);
    res.status(500).json({ error: "Internal server error in LEAVE LETTER" });
  }
};

export const studentDamageReport = async (req, res) => {
  try {
    const { location, brief, description } = req.body;
    const studentid = req.user.id;
    const category = "DamageReport";

    const uploadedImgUrl = req.file
      ? await uploadOnCloudinary(req.file.path)
      : null;

    const damageReport = await pool.query(
      `INSERT INTO damageReport (student_id, location_of_damage, brief, description, upload_image)
                VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [studentid, location, brief, description, uploadedImgUrl]
    );

    const lr = damageReport.rows[0];
    const req_ref_id = lr.id;

    const damageRepSend = await pool.query(
      `INSERT INTO staffrequests(student_id, category, request_reference_id) VALUES($1, $2, $3) RETURNING *`,
      [studentid, category, req_ref_id]
    );

    res.status(201).json({ message: "Message sent successfully", lr });
  } catch (error) {
    console.error("Error Damage report", error.message);
    res.status(500).json({ error: "Internal server error in Damage report" });
  }
};

export const studentComplaint = async (req, res) => {
  try {
    const { room_number, brief, complaint } = req.body;
    const studentid = req.user.id;
    const category = "Complaint";

    const complaintReq = await pool.query(
      `INSERT INTO ComplaintRequest (student_id, room_number, brief, complaint)
                    VALUES ($1, $2, $3, $4) RETURNING *`,
      [studentid, room_number, brief, complaint]
    );

    const lr = complaintReq.rows[0];
    const req_ref_id = lr.id;

    const complaintSend = await pool.query(
      `INSERT INTO staffrequests(student_id, category, request_reference_id) VALUES($1, $2, $3) RETURNING *`,
      [studentid, category, req_ref_id]
    );

    res.status(201).json({ message: "Message sent successfully", lr });
  } catch (error) {
    console.error("Error complaint request", error.message);
    res
      .status(500)
      .json({ error: "Internal server error in complaint request" });
  }
};
