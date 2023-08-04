import mongoose from 'mongoose';
// import config from 'config';
// const db = config.get('mongoURI');
import dotenv from 'dotenv';
dotenv.config();
const db = process.env.DATABASE_URL;

const connectDB = async () => {
    // console.log(db);
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message + "");
        process.exit(1);
    }
};

export default connectDB;