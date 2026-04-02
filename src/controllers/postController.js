import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const newPost = await Post.create({
      userId: req.user.id,
      username: req.user.username,

      text: req.body.text,

      // agar URL diya hai to URL save hoga
      // agar file upload ki hai to file path save hoga
      image: req.body.image || req.file?.path,
    });

    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.json(posts);
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  const alreadyLiked = post.likes.find((u) => u.userId === req.user.id);

  if (alreadyLiked) {
    post.likes = post.likes.filter((u) => u.userId !== req.user.id);
  } else {
    post.likes.push({
      userId: req.user.id,
      username: req.user.username,
    });
  }

  await post.save();

  res.json(post);
};

export const commentPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.comments.push({
    userId: req.user.id,
    username: req.user.username,
    comment: req.body.comment,
  });

  await post.save();

  res.json(post);
};
