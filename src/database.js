const mongoose = require('mongoose');

const URI = 'mongodb+srv://gastongerber1:Maradona1990.@cluster0.aqvck.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;