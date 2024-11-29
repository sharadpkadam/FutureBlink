import express from "express";
import { apiSchedule } from "../controllers/scheduleController.js";
import { saveFlow } from "../controllers/flowController.js";

const router = express.Router();

router.post("/schedule-email", apiSchedule);
router.post("/save-flow", saveFlow);

export default router;
