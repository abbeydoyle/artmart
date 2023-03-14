const mongoose = require('mongoose');

//FIXME: change the mongodb name at the end
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
