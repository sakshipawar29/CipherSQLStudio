const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

  const { question, userQuery } = req.body;

  let hint = "Think about using a WHERE clause to filter rows.";

  if(userQuery.toLowerCase().includes("select")){
    hint = "You may need to filter rows based on a condition using WHERE.";
  }

  res.json({ hint });

});

module.exports = router;