import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Post } from '../../models/Post';

const allWrapper: RequestHandler = async (req, res) => {
  const posts = await Post.find();
  res.send({ posts });
};

export const post = relogRequestHandler(allWrapper);
