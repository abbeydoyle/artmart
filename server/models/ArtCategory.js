const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtSchema = new Schema ({
   
   //example
    title: { 
        type: String, 
        required: true 
    
    },
})



const ArtCategory = mongoose.model('ArtCategory', ArtSchema);

module.exports = ArtCategory;