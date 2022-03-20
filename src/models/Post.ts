import {
    Document, Model, Schema, model
  } from 'mongoose';
  
  export interface IPost extends Document {
    /** Name of the book */
    name: string;
    /** Name of the author */
    author: string;
  }
  
  interface IPostModel extends Model<IPost> { }
  
  const schema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true }
  });
  
  export const Book: IPostModel = model<IPost, IPostModel>('Post', schema);
  