const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

//Connect Database
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));

app.use(cors());

//Define Routes
app.use("/api/hotels", require("./routes/api/hotels"));
//app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
