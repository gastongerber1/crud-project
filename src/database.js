const mongoose = require('mongoose');

const URI = 'mongodb+srv://gastongerber1:EMwYNOhdMEACRd9F@cluster0.aqvck.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

