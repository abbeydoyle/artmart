const mongoose = require('mongoose');
const { Schema } = mongoose;

const priceSchema = new Schema ({
    
    price: { 
        type: Number,
        required: true 
        },

    size: { 
        type: String,
        required: true,
    }


});

const Size = mongoose.model('Size', priceSchema);

module.exports = Size;