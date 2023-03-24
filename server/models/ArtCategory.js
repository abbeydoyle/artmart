// FUTURE GOAL - FILTER ART BY CATEGORIES
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtProjectSchema = new Schema ({
   
    name: { 
        type: String, 
        required: true 
    
    },
})

const ArtCategory = mongoose.model('ArtCategory', ArtProjectSchema);

module.exports = ArtCategory;