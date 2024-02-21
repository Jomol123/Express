import express from "express"
// import Student1Router from "./Router/Student1Router.js";
import studentRouter from "./Router/studentRouter.js";
import userRouter from "./Router/userRouter.js";
import shopRouter from "./Router/shopRouter.js";
import check from "./Router/checkRouter.js";
// import User1Router from "./Router/User1Router.js";
// const studentRouter = express.Router();


const app = express();

// studentRouter.get("/student", (req, res) => {
//   res.json({
//     message: "All student fetched"
//   });
// });

//app.use('/students', Student1Router);
// app.use('/users', User1Router);
app.use('/api/user', userRouter);
app.use('/api/stud',studentRouter);
app.use('/api/shop',shopRouter)
app.use('/api/check',check)
app.set('view engine', 'ejs');
// app.use('/api/exple',expleRouter)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
