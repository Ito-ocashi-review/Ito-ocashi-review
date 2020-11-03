import { Types, Schema } from 'mongoose';
import { getOrCreateModel } from './utils/mongoose-utils';

export interface ISweet {
    _id: Types.ObjectId
    name: string;
}

const schema = new Schema<ISweet>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default getOrCreateModel<ISweet>('Sweet', schema);
