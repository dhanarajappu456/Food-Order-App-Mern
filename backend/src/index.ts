import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to DB"));
const PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/my/user", MyUserRoute);
// app.get("/test", (req: Request, res: Response) => {
//   res.json({ message: "hello" });
// });

app.listen(PORT, () => {
  console.log("Started the server!!!");
});
