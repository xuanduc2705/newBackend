import { getBoxchat, getBoxchatMess } from "@/controller";
import { evictMessage, getAllMess } from "@/controller/BoxchatController";
import Controller from "@/middlewares";
class RouteExtend extends Controller {}
const boxchat = new RouteExtend();

boxchat.get("/api/boxchat", getBoxchat);
boxchat.get("/api/boxchat/message", getAllMess);
boxchat.post("/api/boxchat/mess", getBoxchatMess);
boxchat.post("/api/boxchat/evictmess", evictMessage);

export default boxchat.router;
