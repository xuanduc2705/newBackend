import express from "express";
import UserWeb from "./UserWeb";
import BoxchatWeb from "./BoxchatWeb";
import PostWeb from "./PostWeb";
const app = express();
app.use("/user", UserWeb);
app.use("/boxchat", BoxchatWeb);
app.use("/post", PostWeb);
export default app;
