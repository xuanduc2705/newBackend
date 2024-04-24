import express from "express";
import webApi from "@/route/web";
import userApi from "@/route/user";
import boxchat from "@/route/boxchat";
import post from "./post";

const routeapi = express.Router();
// routeapi.use(express.json());
routeapi.use("/post", post);
routeapi.use("/user", userApi);
routeapi.use("/boxchat", boxchat);
routeapi.use("/", webApi);

export default routeapi;
