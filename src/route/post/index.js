import { addPost, getPostbyId, showPost } from "@/controller";
import Controller from "@/middlewares";
class RouteExtend extends Controller {}
const post = new RouteExtend();

post.post("/api/post/createpost", addPost);
post.post("/api/post/postbyid", getPostbyId);
post.get("/api/post/getpost", showPost);

export default post.router;
