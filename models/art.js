const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const artSchema = new Schema({
        artist: String,
        title: String,
        dimensions: {type:Number, required: true, min: 0, max: 9999},
        location: String,
         medium: String,
         year: Number


},{

    timestamps: true

});



module.exports = mongoose.model('Art', artSchema);
