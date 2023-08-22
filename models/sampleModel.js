const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sampleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Sample', sampleSchema)