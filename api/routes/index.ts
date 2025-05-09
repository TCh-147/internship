import express, {request, response} from "express"
import { MongoClient } from "mongodb"
import mongoose from "mongoose"

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

const dbUrl: string = "mongodb://localhost:27017/fibankdb"

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(dbUrl)
    console.log('MongoDb connected!!! DB Host:' + connectionInstance.connection.host)
  } catch (error) {
    console.log('Mongo connection error: ', error)
    process.exit(1)
  }
}
connectDb()

let usersCollection = null
const client = new MongoClient("mongodb://localhost:27017/")
await client.connect()
const database = client.db("fibankdb")
let collection = await database.listCollections({}, { nameOnly: true }).toArray();
collection.filter((collectionName) => {
  return collectionName.name === "users";
});


const app = express()
const Users = mongoose.model("user", UserSchema)

app.get('/users', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

app.post('/register/newUser', async (request, res) => {
    try {
        const newUser = await Users.create()
        try {
            if (collection.length == 0) {
                usersCollection = await database.createCollection("users")
            } else {
                usersCollection = await database.collection("users")
            }
            await usersCollection.insertOne(newUser)
            console.log("successfully added to the database")
        } catch (error) {
            console.log(error)
        }
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({message: error})
    }
})

app.listen(1407, ()=> {
    console.log('Server started on https://localhost:1407')
})
