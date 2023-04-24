const router = require("express").Router();
const UrlData = require("../Model/UrlData");

router.post("/:shortIdCode", async (req, res) => {
    const shortCode = req.params.shortIdCode;
    try {
        const urlInfo = await UrlData.findOne( { shortUrlCode: shortCode } );
        if(urlInfo){
            urlInfo.visitCount++;
            urlInfo.save();
            res.redirect(200,urlInfo.longUrl);
        }
        else res.status(404).json("Short URL not found, Enter valid Short URL");
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/:shortIdCode/stat", async (req, res) =>{
    const shortCode = req.params.shortIdCode;
    try {
        const urlInfo = await UrlData.find( { shortUrlCode: shortCode } );
        if(urlInfo) res.status(200).json(urlInfo);
        else res.status(404).json("Short URL not found, Enter valid Short URL");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;