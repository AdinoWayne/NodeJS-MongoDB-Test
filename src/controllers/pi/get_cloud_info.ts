import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Pi } from '../../models/Pi';

const allWragger: RequestHandler = async (req, res) => {
  const pi = await Pi.findOne({});
  res.status(200).json(pi.cloud);
};

export const get_cloud_info = relogRequestHandler(allWragger);
