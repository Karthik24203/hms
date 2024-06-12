import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import events from "events";

import authRoutes from "./routes/auth.routes.js";
import requestroutes from "./routes/student.routes.js";
import getforms from "./routes/display.routes.js";
import staffRuests from "./routes/staff.routes.js";

events.EventEmitter.defaultMaxListeners = 20; // fo the below error
// (node:20436) MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
// 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)
// Error LEAVE LETTER undefined

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api/auth", authRoutes);
app.use("/api/requests", requestroutes);
app.use("/api/getforms", getforms);
app.use("/api/staffreq", staffRuests);

app.listen(PORT, () => {
  console.log(`server ruunug at ${PORT}`);
});
