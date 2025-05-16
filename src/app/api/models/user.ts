import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    EGN: {type: String, required: true},
    LnchOrpassportNum: {type: Number},
    fullNameCyrilic: {type: String, required: true},
    fullNameLatin: {type: String, required: true},
    email: {type: String, required: true},
    phoneNum: {type: String, required: true},
    address: {type: String, required: true}
})

const Users = mongoose.model("user", UserSchema)
export default Users