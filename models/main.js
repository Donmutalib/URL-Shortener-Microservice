const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: [true, 'Please provide original url']
    }
})

const Url = mongoose.model("Url", urlSchema)
module.exports = Url
