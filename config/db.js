
const mongoose = require('mongoose');




const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDb COnnected")
  } catch (err) {
    console.log("🚀 ~ file: db.js ~ line 17 ~ connectDB ~ err", err)
    process.exit(1);
  }
};

module.exports = connectDB ;





// module.exports = connectDB ;