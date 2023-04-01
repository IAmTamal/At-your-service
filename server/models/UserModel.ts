import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  servicesprovided: string[];
  location: string;
  charge: number;
  availability: { day: string, time: string }[];
  keywords: string[];
  slug: string;
  banner: {
    data: Buffer;
    contentType: string;
  };
  profilepic: {
    data: Buffer;
    contentType: string;
  };
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  servicesprovided: { type: [String] },
  location: { type: String },
  charge: { type: Number },
  availability: { type: [{ day: String, time: String }] },
  keywords: { type: [String] },
  slug: { type: String, unique: true },
  banner: {
    data: Buffer,
    contentType: String,
  },
  profilepic: {
    data: Buffer,
    contentType: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = model<IUser>("User", userSchema);

export default User;
