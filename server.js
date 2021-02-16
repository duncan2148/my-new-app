
const express = require("express");
const app = express();
app.use("/public", express.static(`${process.cwd()}/public`));
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});