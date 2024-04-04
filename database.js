const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
const result = dotenv.config();

if (result.error) {
    console.error(result.error);
    process.exit(1);
}

console.log('.env file loaded successfully');


const mongoDB_url = process.env.MONGODB_URL;


const getDB = async () => {
    try {
        if (!mongoDB_url) {
            throw new Error('MONGODB_URL is not defined in the environment variables.');
        }

        //console.log(`MongoDB URI: ${mongoDB_url}`);
        const conn = await mongoose.connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true });
       
       //await createIndexes();
        //console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};




// async function createIndexes() {
//     try {
//       await Event.createIndex({ date: 1 });
//       await Event.createIndex({ latitude: 1, longitude: 1 });
  
//       console.log('Indexes created.');
//     } catch (error) {
//       console.error('Error creating indexes:', error);
//     }
//   }
  
  
module.exports = getDB;
