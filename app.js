const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const indexRouter = require('./routes/index')
const employerRouter = require('./routes/employers')
const studentRouter = require('./routes/students')
const messageRouter = require('./routes/message')
const profileRouter = require('./routes/profile')
const employerAuthRouter = require('./routes/employerAuthRoute')
const studentAuthRouter = require('./routes/studentAuthRoute')
const {requireEmpAuth} = require('./middleware/employerAuthMiddleware')
const {requireStudAuth} = require('./middleware/studentAuthMiddleware')
const cookieParser = require('cookie-parser')

const port = 5000;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
app.use("/", indexRouter);
app.use("/employers",requireEmpAuth, employerRouter);
app.use("/students",requireStudAuth, studentRouter);
app.use("/employer-auth", employerAuthRouter)
app.use("/student-auth", studentAuthRouter)
app.use("/message", messageRouter);
app.use("/profile", profileRouter)

// View engine setup - for displaying the dynamic front end content
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

// Set up mongoose connection
mongoose.set("strictQuery", false);

const mongoDB = "mongodb://localhost:27017/jobportal";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected to MongoDb')
}


//START THE SERVER  
app.listen(port, () => {
    console.log(`the server is listening at http://localhost: ${port}`)
})
