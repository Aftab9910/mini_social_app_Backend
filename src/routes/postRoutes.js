import express from "express";
import multer from "multer";

import {
  createPost,
  getPosts,
  likePost,
  commentPost,
} from "../controllers/postController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", verifyToken, upload.single("image"), createPost);

router.get("/", getPosts);

router.put("/:id/like", verifyToken, likePost);

router.post("/:id/comment", verifyToken, commentPost);

export default router;
