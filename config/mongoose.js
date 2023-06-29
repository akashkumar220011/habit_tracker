const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://krakash1022:aksh09876@cluster0.0n57yxv.mongodb.net/Habbit_tracker');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
