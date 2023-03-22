const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtProjectSchema = new Schema ({
   
   //example
    name: { 
        type: String, 
        required: true 
    
    },
})



const ArtCategory = mongoose.model('ArtCategory', ArtProjectSchema);

module.exports = ArtCategory;