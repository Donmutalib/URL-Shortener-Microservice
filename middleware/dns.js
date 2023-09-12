const dns = require("dns")
const urlparser = require("url")

const dnsLookUp = async (req, res, next) => {
    const { url } = req.body

    if (!url) {
        return res.json({ error: 'invalid url' });
    }

    dns.lookup(urlparser.parse(url).hostname, (err, address) => {
        if (!address) {
            return res.json({ error: 'invalid url' });
        }
    })
    next()
}

module.exports = dnsLookUp