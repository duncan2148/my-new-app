const express = require('express');
const router = express.Router()

router.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin/login.html");
});
module.exports = router;