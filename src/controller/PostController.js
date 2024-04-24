import db from "@/models";
import { where } from "sequelize";

export const addPost = async (req, res) => {
  const { host, title, img } = req.body;

  let post = {
    host: host,
    title: title,
    likes: 0,
    img: img,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await db.Post.create(post);
  res.send(post);
};

export const showPost = async (req, res) => {
  const posts = await db.Post.findAll({
    include: [
      { model: db.User },
      {
        model: db.Comment,
        include: [{ model: db.Reply, include: [db.User] }, db.User],
      },
    ],
  });
  res.send(posts);
};

export const addComment = async (req, res) => {
  const { account, postid, content } = req.body;
  let comments = {
    account: account,
    postid: postid,
    content: content,
  };
  await db.Comment.create(comments);
  res.send(comments);
};
export const addReply = async (req, res) => {
  const { account, content, reply } = req.body;
  let recomments = {
    account: account,
    content: content,
    reply: reply,
  };
  await db.Reply.create(recomments);
  res.send(recomments);
};
export const getPostbyId = async (req, res) => {
  const { id } = req.body;
  const posts = await db.Post.findAll({
    include: [
      { model: db.User },
      {
        model: db.Comment,
        include: [{ model: db.Reply, include: [db.User] }, db.User],
      },
    ],
    where: { id: id },
  });
  const users = await db.User.findAll({
    where: { id: JSON.parse(posts[0].listlikes) },
  });
  posts[0].listlikes = users;
  res.send(posts[0]);
};
export const getlistLike = async (req, res) => {
  const { id } = req.body;
  const posts = await db.Post.findAll({ where: { id: id } });
  const arr = posts[0];
  const users = await db.User.findAll({
    where: { id: JSON.parse(arr.listlikes) },
  });
  res.send({ likes: users.length, list: users });
};
