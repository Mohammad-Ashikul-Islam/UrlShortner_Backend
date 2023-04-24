const mongoose = require("mongoose");
const ShortUniqueId = require("short-unique-id");

const UrlDataSchema = new mongoose.Schema(
    {
        longUrl: { type: String, required: true, unique: true },
        shortUrlCode: { type: String, required: true, unique: true,
                    default: new ShortUniqueId({length: 10})()
        },
        visitCount: { type: Number, required: true,
                    default: 0            
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("UrlData", UrlDataSchema);