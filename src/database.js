const mongoose = require('mongoose');

const URI = 'mongodb://gastongerber:rosario@cluster0.kxdpj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

