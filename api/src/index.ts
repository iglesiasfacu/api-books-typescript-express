import express from "express";
import cors from "cors";
import { connect, connection } from "mongoose";
import { PORT, MONGODB_URI } from "./config";
import booksRoutes from "./routes/books.routes";
import ratingsRoutes from "./routes/ratings.routes";
import usersRoutes from "./routes/users.routes";
import mongoRoutes from "./routes/mongo.routes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (_, res) => {
  res.send("Welcome to API Books!");
});

app.get("/api", async (_, res) => {
  res.send("/books - /ratings - /users");
});

app.use("/api", booksRoutes);
app.use("/api", ratingsRoutes);
app.use("/api", usersRoutes);
app.use("/api", mongoRoutes);

connect(MONGODB_URI)
  .then(async () => {
    app.listen(PORT);
    console.log(`Api listening in http://localhost:${PORT}`);
  })
  .catch((err: any) => {
    console.log("An error has ocurred while connecting to database:", err);
  });

export const indexDirname = __dirname;
export default connection;
