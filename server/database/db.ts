import mongoose, { ConnectOptions } from 'mongoose';
import { config } from 'dotenv';
config();

const connectToMongo = async () => {
  try {

    await mongoose.connect(process.env.MONGO_DB_URI!);

    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectToMongo;
