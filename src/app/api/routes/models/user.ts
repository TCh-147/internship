import mongoose, {Document,Model} from "mongoose";

export interface IUser extends Document{
    username: string;
    password: string;
    EGN: string;
    LnchOrpassportNum?: number;
    fullNameCyrilic: string;
    fullNameLatin: string;
    email: string;
    phoneNum: string;
    address: string;
}

const UserSchema = new mongoose.Schema<IUser>({
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

const User: Model<IUser> = mongoose.model<IUser>("user", UserSchema)
export default User