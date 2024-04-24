import db from "@/models";

async function addMessageToBoxchat(data) {
  const { boxchatid, content, id, avatar, time } = data;
  await db.Message.create({
    content: content,
    name: id,
    avatar: avatar,
    boxchatid: boxchatid,
  });
}

export default addMessageToBoxchat;
