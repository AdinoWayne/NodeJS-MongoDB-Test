import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';

const allWragger: RequestHandler = async (req, res) => {
  res.status(200).json({
    pi_rework_mode: "REWORK__ALL_AUTO"
  });
};

export const get_rework_mode = relogRequestHandler(allWragger);
