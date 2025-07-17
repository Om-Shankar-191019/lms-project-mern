import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./server/database/db.js";
import userRoute from "./server/routes/user.route.js";
import courseRoute from "./server/routes/course.route.js";
import mediaRoute from "./server/routes/media.route.js";
import purchaseRoute from "./server/routes/purchaseCourse.route.js";
import courseProgressRoute from "./server/routes/courseProgress.route.js";
import path from "path";

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
