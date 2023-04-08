import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  servicesprovided: string[];
  slug: string;
  banner: string;
  profilepic: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  servicesprovided: { type: [String] },
  slug: { type: String, unique: true },
  banner: { type: String },
  profilepic: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = model<IUser>("User", userSchema);

export default User;
