const mongoose = require("mongoose");

const UrlDataSchema = new mongoose.Schema(
    {
        longUrl: { type: String, required: true },
        shortUrlCode: { type: String, required: true, unique: true
        },
        visitCount: { type: Number, required: true,
                    default: 0            
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("UrlData", UrlDataSchema);