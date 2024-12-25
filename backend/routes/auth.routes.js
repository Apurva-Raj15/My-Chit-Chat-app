import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define routes relative to "/api/auth"
router.post("/signup", signup);  // Resolves to "/api/auth/signup"
router.post("/login", login);    // Resolves to "/api/auth/login"
router.post("/logout", logout);  // Resolves to "/api/auth/logout"

export default router;
