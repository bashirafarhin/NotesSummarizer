import { Router } from "express";
import { sendEmailsToRecipients } from "../controllers/email.controller";

const router = Router();

router.post("/send", sendEmailsToRecipients);

export default router;
