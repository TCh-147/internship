import express from "express"
import mongoose from "mongoose"
import * as argon2 from "argon2"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
// import Users from "./models/user.ts"


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    egn: {type: String, required: true},
    LnchOrpassportNum: {type: Number},
    fullNameCyrillic: {type: String, required: true},
    fullNameLatin: {type: String, required: true},
    email: {type: String, required: true},
    phoneNum: {type: String, required: true},
    address: {type: String, required: true}
})

type registerUser = {
  username: string,
  password: string,
  egn: string,
  LnchOrpassportNum?: number,
  fullNameCyrillic: string,
  fullNameLatin: string,
  email: string,
  phoneNum: string,
  address: string  
}

type loginUser = {
  username: string,
  password: string
}

dotenv.config()

const dbUrl: string = "mongodb://localhost:27017/fibankdb"

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(dbUrl)
    console.log('MongoDb connected. DB Host:' + connectionInstance.connection.host)
  } catch (error) {
    console.log('Mongo connection error: ', error)
    process.exit(1)
  }
}
connectDb()

const app = express()
const Users = mongoose.model("user", UserSchema)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    next()
})

app.use(express.json())

app.get('dashboard', (req, res) => {
  res.json({message: 'dashboard'})
})


app.post('/register', async (request, res) => {
    try {
      const registerData: registerUser = request.body
      registerData.password = await argon2.hash(registerData.password)
      const newUser = await Users.create(registerData)
      console.log("new User: ", newUser)
      res.status(200).json({message: "New user created."})
    } catch (error) {
      res.status(400).json({message: error})
    }
})


app.post('/login', async (request, res) => {
    try {
      const loginData: loginUser = request.body
      const findUser = await Users.findOne({username: loginData.username}).orFail()
      const checkPass: boolean = await argon2.verify(findUser.password, loginData.password)
      const secretApi: string = process.env.API_JWT_SECRET ?? ""
        if(checkPass){
          const token = jwt.sign(JSON.stringify(findUser), secretApi, {algorithm: 'HS256'})
          console.log(token)
          res.status(200).json({message : token})
        }else res.status(401)
    } catch (error) {
        res.status(400).json({message: error})
    }
})

app.listen(1407, ()=> {
    console.log('Server started on http://localhost:1407')
})
