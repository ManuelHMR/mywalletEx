import express from "express";

import { signIn, signUp } from "../controllers/authControllers.js";
import { validateSignUp, validateSignIn, validateToken } from "../middlewares/userMiddlewares.js";
import { validateTransaction } from "../middlewares/transactionsMiddewares.js";
import { getFinancialEvents, getFinancialEventsSum, postFinancialEvents } from "../controllers/transactionControllers.js";

const router = express.Router();

router.post("/sign-up", validateSignUp, signUp);
router.post("/sign-in", validateSignIn, signIn);
router.post("/financial-events", validateToken, validateTransaction, postFinancialEvents);
router.get("/financial-events", validateToken, getFinancialEvents);
router.get("/financial-events/sum", validateToken, getFinancialEventsSum);

export default router;