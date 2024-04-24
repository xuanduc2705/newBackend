// import { dbf } from "@/configset";
import db from "@/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  const { email, nickname, password, avatar } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const createAt = new Date();
  const year = createAt.getFullYear();
  const day = String(createAt.getDate()).padStart(2, "0");
  const month = String(createAt.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const formattedDate = `${year}-${day}-${month}`;
  const userObject = {
    email: email,
    nickname: nickname,
    name: nickname,
    password: hashed,
    createAt: formattedDate,
    updateAt: formattedDate,
  };
  if (avatar) {
    userObject.avatar = avatar;
  } else {
    userObject.avatar =
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  }

  await db.User.create(userObject);
  res.send(userObject);
};
export const getUser = async (req, res) => {
  const list = [{ hello: "hi" }];
  const users = await db.User.findAll(); // Fetch all users using the User model
  res.status(200).json(users);
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({ where: { email: email } });
  if (!user) {
    res.send({ msg: "No user found" });
  } else {
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      res.send({ msg: "Wrong password" });
    } else {
      const accesstoken = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "1h" }
      );

      res.send({ user, accesstoken });
    }
  }
};
