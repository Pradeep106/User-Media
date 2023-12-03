const express = require("express");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
const app = express();
const dbConnect = require("./utils/dbConnect");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  return res.status(200).send("Ok From Server");
});

const PORT = 8000;

console.log(dbConnect);
dbConnect.connect();

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
