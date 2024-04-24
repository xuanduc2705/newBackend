import db from "@/models";
import message from "@/models/message";
import { where } from "sequelize";
export const getBoxchat = async (req, res) => {
  const list = await db.Boxchat.findAll();
  res.send(list);
};
export const addBoxchat = async (req, res) => {
  const { host, partner, isg, avatar1, avatar2, groupname } = req.body;
  const boxchat = await db.Boxchat.findAll();
  const createAt = new Date();
  const year = createAt.getFullYear();
  const day = String(createAt.getDate()).padStart(2, "0");
  const month = String(createAt.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}-${day}-${month}`;
  let boxchatt;
  if (isg == true) {
    const existingBoxchat = boxchat.find(
      (u) => u.member == partner && u.host == host && u.groupname == groupname
    );
    if (existingBoxchat) {
      res.send({ msg: "boxchat already exist" });
    }
    boxchatt = {
      isGroupchat: isg,
      host,
      member: JSON.stringify(partner),
      groupava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCujK7OcdBUH69lfzqxwviShPwo1Oo5-IZRoqekZx4w&s",
      groupname: groupname,
    };
  } else {
    const existingBoxchat1 = boxchat.find(
      (u) => u.member == partner && host == host
    );
    const existingBoxchat2 = boxchat.find(
      (u) => u.member == host && host == partner
    );
    if (existingBoxchat1 || existingBoxchat2) {
      res.send({ error: "Already has" });
    }
    boxchatt = {
      isGroupchat: isg,
      host: host,
      member: partner,
      avatar1: avatar1,
      avatar2: avatar2,
      createAt: formattedDate,
      updateAt: formattedDate,
    };
  }
  await db.Boxchat.create(boxchatt);
  res.send(boxchatt);
};
export const getBoxchatMess = async (req, res) => {
  const { boxchatid } = req.body;
  const list = await db.Message.findAll({ where: { boxchatid: boxchatid } });
  res.send(list);
};
export const evictMessage = async (req, res) => {
  const { id } = req.body;
  const mess = await db.Message.findOne({ where: { id: id } });
  const message = await mess.update({ content: "Tin nhắn đã bị thu hồi" });
  res.send(message);
};
export const getAllMess = async (req, res) => {
  const mess = await db.Message.findAll();
  res.send(mess);
};
