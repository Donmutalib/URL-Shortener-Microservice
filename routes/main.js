const express = require('express')
const router = express.Router()
const { createShortURL, getShortUrl } = require('../controllers/main')
const dnsLookUp = require('../middleware/dns')

router.route('/').post(dnsLookUp, createShortURL)
router.route('/:id').get(getShortUrl)


module.exports = router