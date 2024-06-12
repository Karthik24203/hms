import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import {
  getComplaintDetail,
  getDamageDetail,
  getLateDetail,
  getLeaveDetail,
} from "../controllers/display.controller.js";

const router = express.Router();

router.get("/getLeave", protectRoute, getLeaveDetail);

router.get("/getLate", protectRoute, getLateDetail);

router.get("/getDamage", protectRoute, getDamageDetail);

router.get("/getComplaint", protectRoute, getComplaintDetail);

export default router;
