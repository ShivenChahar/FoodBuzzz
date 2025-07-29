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
        const foodData = await mongoose.connection.db.collection('food_items').find({}).toArray();
        const categoryData = await mongoose.connection.db.collection('food_category').find({}).toArray();
        global.food_items = foodData;
        global.food_category = categoryData;
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
