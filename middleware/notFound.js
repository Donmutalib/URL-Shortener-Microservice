const notFoundMiddleware = (req, res) => {
    return res.json({ error: 'invalid url' });
}


module.exports = notFoundMiddleware