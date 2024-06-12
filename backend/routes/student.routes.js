import express from "express";
import {
  studentComplaint,
  studentDamageReport,
  studentLateRequest,
  studentLeaveLetter,
} from "../controllers/student.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post(
  "/leave",
  protectRoute,
  upload.single("permission_letter"),
  studentLeaveLetter
);
router.post(
  "/late",
  protectRoute,
  upload.single("permission_letter"),
  studentLateRequest
);
router.post(
  "/damage",
  protectRoute,
  upload.single("uploadedimg"),
  studentDamageReport
);
router.post("/complaint", protectRoute, studentComplaint);

export default router;
