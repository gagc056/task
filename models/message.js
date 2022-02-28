const mongoose = require("mongoose");

const messagesSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    media: {
        type: String,
    },
    sent_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Message", messagesSchema);