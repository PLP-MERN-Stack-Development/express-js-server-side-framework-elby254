// importing mongoose
const mongoose = require ('mongoose');
require('dotenv').config();

// create a async function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

// separating the database logic from the main server
module.exports = connectDB;