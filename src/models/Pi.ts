import {
    Document, Model, Schema, model
} from 'mongoose';
  
export interface IPi extends Document {
    cloud: {
        curr_state: string;
        fw_name: string;
        fw_size: string;
        fw_md5_hash: string;
        cloud_connected: string;
    };
    raspberry: {
        cm_mac: string;
        sn_num: string;
        fw_ver: string;
    };
    pi_cloud_state: string;
    pi_v4_state: string;
}
  
interface IPiModel extends Model<IPi> { }
  
const schema = new Schema({
    cloud: {
        curr_state: { type: String, required: false },
        fw_name: { type: String, required: false },
        fw_size: { type: String, required: false },
        fw_md5_hash: { type: String, required: false },
        cloud_connected: { type: String, required: false },
    },
    raspberry: {
        cm_mac: { type: String, required: false },
        sn_num: { type: String, required: false },
        fw_ver: { type: String, required: false },
    },
    pi_cloud_state: { type: String, required: false },
    pi_v4_state: { type: String, required: false }
});
  
export const Pi: IPiModel = model<IPi, IPiModel>('Pi', schema);
  