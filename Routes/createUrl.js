const router = require("express").Router();
const UrlData = require("../Model/UrlData");
const ShortUniqueId = require("short-unique-id");

router.post("/", async (req, res) => {
    const shortUrlCode = new ShortUniqueId({length: 10})();
    const longUrl = req.body;
    let info = longUrl;
    info.shortUrlCode = shortUrlCode; // adding short url code in the info object to pass to the schema
    const newUrlData = new UrlData(info);
    try {
        const saved = await newUrlData.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;