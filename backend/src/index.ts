import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
const PORT = process.env.PORT || 5173;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log("Started the server!!!");
});
