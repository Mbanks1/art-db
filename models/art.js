const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const artSchema = new Schema({
        Artist: String,
        Title: String,
        Dimensions: {type:Number, required: true, min: 0, max: 9999},
        location: String,
         Medium: String,
         Year: Number


},{

    timestamps: true

});



module.exports = mongoose.model('Art', artSchema);
