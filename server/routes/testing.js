const express = require("express");
const router = express.Router();
const db = require("../db/db_config");

// POST: Add user
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.json({ message: "User added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding user" });
  }
});

module.exports = router;
