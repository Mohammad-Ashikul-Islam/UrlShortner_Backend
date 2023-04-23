const mongoose = require("mongoose");
const nanoid = require("nanoid");

const UrlDataSchema = new mongoose.Schema(
    {
        longUrl: { type: String, required: true, unique: true },
        shortUrlCode: { type: String, required: true, unique: true,
                    default: nanoid(10)
        },
        visitCount: { type: Number, required: true,
                    default: 0            
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("UrlData", UrlDataSchema);