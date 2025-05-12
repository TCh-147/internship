import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    EGN: {type: String, require: true},
    LnchOrpassportNum: {type: Number},
    fullNameCyrilic: {type: String, require: true},
    fullNameLatin: {type: String, require: true},
    email: {type: String, require: true},
    phoneNum: {type: String, require: true},
    address: {type: String, require: true}
})

export default mongoose.model("user", UserSchema)