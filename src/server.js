import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { socketHandler } from "./configset";
import { routeapi } from "@/route";
require("../connect");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
const PORT = 8000;

app.use(routeapi);
const server = http.createServer(app);
const socketIo = new Server(server, {
  cors: {
    origin: "*",
  },
});
server.listen(8000, () => {
  console.log("Server is running!");
});
socketIo.on("connection", (socket) => {
  socketHandler(socket, socketIo);
});
