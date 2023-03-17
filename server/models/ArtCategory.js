const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtSizeSchema = new Schema ({
   
   //example
    title: { 
        type: String, 
        required: true 
    
    },
})



const ArtCategory = mongoose.model('ArtCategory', ArtSizeSchema);

module.exports = ArtCategory;