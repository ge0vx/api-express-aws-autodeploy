//require("dotenv").config();

const express = require("express");
const cors = require("cors");

//const connectDB = require("./config/db");
//const userRoutes = require("./routes/users");
const errorHandler = require("../middlewares/error");


// Connect to DB
//connectDB();

// Express App
const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", (req, res)=>{
  return res.status(200).json({
    message: 'hello g3'
  })
});

app.use("/api/test", (req, res) => {
  return res.status(200).json({
    message: 'This is new feature change, a new route for test'
  })
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});

