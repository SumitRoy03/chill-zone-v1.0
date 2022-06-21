const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("App is running on 5000!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id)
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT : ${5000}`));
