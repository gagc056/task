const mongoose = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true
    },
    conversations: [{
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
    }],
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema);