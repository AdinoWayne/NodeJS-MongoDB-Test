import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Pi } from '../../models/Pi';

export const addPiSchema = Joi.object().keys({
    action_name: Joi.string().required(),
});

const addWrapper: RequestHandler = async (req, res) => {
    const { action_name } = req.body;
    const pi = await Pi.findOne({});
    pi.pi_v4_state = action_name;
    await pi.save();
    res.status(200).json(pi.toJSON());
};

export const do_action = relogRequestHandler(addWrapper, { validation: { body: addPiSchema } });
