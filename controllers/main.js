const Url = require('../models/main')


const createShortURL = async (req, res) => {
    const { url } = req.body

    const newUrl = await Url.create({ original_url: url })
    return res.json({ original_url: url, short_url: newUrl._id })
}

const getShortUrl = async (req, res) => {
    const { id } = req.params
    const url = await Url.findById(id)
    if (!url) {
        return res.json({ error: "Invalid URL" })
    }
    res.redirect(url.original_url)

}


module.exports = { createShortURL, getShortUrl }