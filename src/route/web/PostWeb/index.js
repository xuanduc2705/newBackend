import { addComment, addReply, getlistLike } from "@/controller";
import RouteExtend from "@/middlewares";

const postWebApi = new RouteExtend();

postWebApi.post("/api/post/addcomment", addComment);
postWebApi.post("/api/post/addreply", addReply);
postWebApi.post("/api/post/getlistlike", getlistLike);

export default postWebApi.router;
