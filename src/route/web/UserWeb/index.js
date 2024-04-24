import { Register, login } from "@/controller";
import RouteExtend from "@/middlewares";

const userWebApi = new RouteExtend();

userWebApi.post("/register", Register);
userWebApi.post("/login", login);

export default userWebApi.router;
