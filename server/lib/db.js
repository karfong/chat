import mongoose from "mongoose";

//function to connect to the database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Mongoose connected to db'));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat`);
    } catch (error) {
        console.log(error);
    }
}