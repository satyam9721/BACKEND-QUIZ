// database/db.js
const mongoose = require('mongoose');
// mongodb://0.0.0.0:27017/MetaGrowth
//mongodb+srv://satyamrau9721:F5s1wFUB35apNzdC@admin.zzp9cix.mongodb.net/MetaGrowth?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://satyamrau9721:F5s1wFUB35apNzdC@admin.zzp9cix.mongodb.net/MetaGrowth?retryWrites=true&w=majority'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
