const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const fileController = require("../controllers/fileController");

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  fileController.uploadFile
);
router.get("/files", authMiddleware, fileController.listFiles);
router.delete("/files/:filename", authMiddleware, fileController.deleteFile);

module.exports = router;
