
const express = require("express");
const app = express();
app.use("/public", express.static(`${process.cwd()}/public`));
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
//app.use("/admin", require("./routes/admin.js"));
app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin/login.html");
});
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});