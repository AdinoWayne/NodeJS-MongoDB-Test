import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Pi } from '../../models/Pi';

const allWragger: RequestHandler = async (req, res) => {
  const pi = await Pi.findOne({});
  res.status(200).json(pi.raspberry);
};

export const get_v4_info = relogRequestHandler(allWragger);
