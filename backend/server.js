const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes")
dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("App is running on 5000!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT : ${5000}`));
