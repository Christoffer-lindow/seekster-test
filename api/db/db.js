import mongoose from "mongoose";
const connectDB = async (uri) => {
    let db;
    try {
        db = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database.");
    } catch (err) {
        console.log("Could not connect to db", err);
    }
    return db;
};

export default connectDB;