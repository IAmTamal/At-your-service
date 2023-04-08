import { Schema, model, Document } from "mongoose";

export interface IService extends Document {
    name: string;
    description: string;
    slug: string;
    location: { type: String },
    charge: { type: Number },
    availability: { type: [{ day: String, time: String }] },
    keywords: { type: [String] },
    banner: string
}

const serviceSchema = new Schema<IService>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true },
    location: { type: String },
    charge: { type: Number },
    availability: { type: [{ day: String, time: String }] },
    keywords: { type: [String] },
    banner: { type: String }
});

const Service = model<IService>("Service", serviceSchema);

export default Service;