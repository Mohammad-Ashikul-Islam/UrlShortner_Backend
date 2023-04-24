const router = require("express").Router();
const UrlData = require("../Model/UrlData");

router.post("/", async (req, res) => {
    const newUrlData = new UrlData(req.body);
    try {
        const saved = await newUrlData.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;