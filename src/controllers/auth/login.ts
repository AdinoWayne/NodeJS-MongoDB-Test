import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { User } from '../../models/User';
import { logger } from './../../logger';

const loginWrapper: RequestHandler = async (req, res) => {
  const { email = undefined, password = undefined } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user && user.validPassword(password)) {
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id
      },
      process.env.SECRET,
      {
        expiresIn: '12h'
      }
    );
    const userObject = user.toObject();
    userObject.token = token;
    return res.status(200).send(userObject);
  }

  return res.status(403).json({
    message: 'Auth failed'
  });
};

export const login = relogRequestHandler(loginWrapper, { skipJwtAuth: true });
