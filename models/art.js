const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({


},{
    timestamps: true
});



module.exports = mongoose.model('Art', artSchema);
