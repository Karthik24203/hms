import express from "express";
import {
  StaffreqDetail,
  StaffreqUpdate,
} from "../controllers/staff.controller.js";

const router = express.Router();

router.get("/:refid/:name", StaffreqDetail);

router.get("/Update/:refid/:name", StaffreqUpdate);

export default router;
