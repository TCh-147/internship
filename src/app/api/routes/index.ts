import express from "express"
import { MongoClient } from "mongodb"
import mongoose from "mongoose"
import * as argon2 from "argon2"
import jwt from "jsonwebtoken"
import {secret} from "./secret_key.ts"
// import User from "./models/user.ts"


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
  LnchOrpassportNum: number,
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

app.post('/register', async (request, res) => {
    try {
      const registerData: registerUser = request.body
      registerData.password = await argon2.hash(registerData.password)
      const newUser = await Users.create(registerData)
        let usersCollection = null
        const client = new MongoClient("mongodb://localhost:27017/")
        await client.connect()
        const database = client.db("fibankdb")
        let collection = await database.listCollections({}, { nameOnly: true }).toArray();
        collection.filter((collectionName) => {
          return collectionName.name === "users";
        })
        if (collection.length == 0) {
          usersCollection = await database.createCollection("users")
        } else {
          usersCollection = await database.collection("users")
        }
        await usersCollection.insertOne(newUser)

      res.status(200).json(newUser)
    } catch (error) {
      res.status(400).json({message: error})
    }
})

app.post('/login', async (request, res) => {
    try {
      const loginData: loginUser = request.body
      const findUser = await Users.findOne({username: loginData.username}).orFail()
      const checkPass: boolean = await argon2.verify(findUser.password, loginData.password)
        if(checkPass){
          const token = jwt.sign(JSON.stringify(findUser), secret, {algorithm: 'HS256'})
          res.status(200).json({token})
        }
    } catch (error) {
        res.status(400).json({message: error})
    }
})

app.listen(1407, ()=> {
    console.log('Server started on https://localhost:1407')
})
