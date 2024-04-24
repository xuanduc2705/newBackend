import addMessageToBoxchat from "@/controller/socketmessage";
import {
  addBoxchat,
  getBoxchat,
  getBoxchatMess,
  getAllMess,
} from "./BoxchatController";
import {
  addPost,
  showPost,
  addComment,
  addReply,
  getPostbyId,
  getlistLike,
} from "./PostController";
import { getUser, Register, login } from "./UserController";

export {
  getBoxchatMess,
  getBoxchat,
  addBoxchat,
  addMessageToBoxchat,
  getUser,
  Register,
  login,
  getAllMess,
  addPost,
  showPost,
  addComment,
  addReply,
  getPostbyId,
  getlistLike,
};
