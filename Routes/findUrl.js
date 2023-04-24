const router = require("express").Router();
const UrlData = require("../Model/UrlData");

router.post("/:shortIdCode", async (req, res) => {
    try {
        const urlInfo = UrlData.findOne( { shortUrlCode: req.params.shortIdCode } );
        if(urlInfo){
            console.log(urlInfo);
            urlInfo.visitCount++;
            res.redirect(urlInfo.longUrl);
        }
        else{
            res.status(404).json("Short URL not found, Enter valid Short URL");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/:shortIdCode/stat", async (req, res) =>{
    const shortCode = req.params.shortIdCode;
    try {
        const urlInfo = UrlData.findOne( { shortUrlCode: shortCode } );
        if(urlInfo) res.status(200).json(urlInfo);
        else{
            res.status(404).json("Short URL not found, Enter valid Short URL");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;