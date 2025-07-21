const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ShivenChahar:shiven0001@foodbuzzz.pweyvfn.mongodb.net/foodBuzzzMERN?retryWrites=true&w=majority&appName=foodBuzzz';  

const mongoDB = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log('Connected to MongoDB');

    try {
      const fetched_data = await mongoose.connection.db.collection('food_items').find({}).toArray();
      console.log('Fetched Data:', /*fetched_data*/);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
};

module.exports = mongoDB;
