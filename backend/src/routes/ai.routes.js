import { Router } from "express";
import { generateContent } from "../controllers/ai.controllers.js";

const router = Router();

router.post("/generate-content", generateContent);

export default router;