const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/mydb';

const mongoDB = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
};

module.exports = mongoDB;
 