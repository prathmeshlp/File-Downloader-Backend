const fs = require("fs");
const File = require("../models/fileModel");

exports.uploadFile = async (req, res) => {
  console.log(req)
  const file = req.file;
  console.log(file)
  const { username } = req;
  const code = Math.floor(100000 + Math.random() * 900000);
  const newFile = new File({ username, filename: file.filename, code });
  await newFile.save();
  res.json({ message: `File uploaded successfully! Your code is ${code}` });
};

exports.listFiles = async (req, res) => {
  try {
    const { username } = req;
    const userFiles = await File.find({ username });
    res.json(userFiles);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { filename } = req.params;
    const { username } = req;
    await File.deleteOne({ username, filename });
    fs.unlinkSync(`uploads/${filename}`);
    res.json({ message: "File removed successfully" });
  } catch (error) {
    console.log(error);
  }
};
