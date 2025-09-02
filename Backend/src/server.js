import express from "express";
import router from "./Router.js";
import dotenv from "dotenv";
import connectToMongo from "./db.js";
import cors from "cors";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.use(express.json());

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use("/api/note", router);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../../Frontend/dist/index.html")),
  );
  app.get("*", (_, res) => {
    res.sendFile(
      path.join(__dirname, "../", "../Frontend", "dist", "index.html"),
    );
  });
}

connectToMongo().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started");
  });
});
