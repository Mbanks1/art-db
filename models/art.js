const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const artSchema = new Schema({
        artist: String,
        title: String,
        dimensions: String,
        location: String,
         medium: String,
         year: Number,
         favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],

},{

    timestamps: true

});



module.exports = mongoose.model('Art', artSchema);
