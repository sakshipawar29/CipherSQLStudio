const express = require("express");
const router = express.Router();
const pool = require("../db/postgres");

router.post("/execute", async (req, res) => {

  try {

    const { query } = req.body;

    const result = await pool.query(query);

    res.json(result.rows);

  } catch (err) {

    console.error(err);
    res.status(500).json({ error: err.message });

  }

});

module.exports = router;