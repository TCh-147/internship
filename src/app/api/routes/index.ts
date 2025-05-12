import express, {request, response} from "express"
import { MongoClient } from "mongodb"
import mongoose from "mongoose"
import { z } from "zod"

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

const validationSchema = z.object({
    egn: z.string({required_error: "Моля, въведете ЕГН!"}).length(10, {message: "Невалидно ЕГН!"}),
    fullNameCyrillic: z.string({required_error: "Моля, въведете име!"}).refine(
      (name) => name.match(/[А-Яа-я]/), {message: "Моля, въведете име на кирилица!"}
    ),
    fullNameLatin: z.string({required_error: "Моля, въведете име!"}).refine(
      (name) => name.match(/[A-Za-z]/), {message: "Моля, въведете име на латиница!"}
    ),
    lnchOrPassport: z.number({invalid_type_error: "Невалиден ЛНЧ!"}).optional().or(z.literal('')).refine(
      (data) => data?.toString().length != 10, {message: "Невалиден ЛНЧ!"}
    ),
    phoneNum: z.string({required_error: "Моля, въведете телефон!"}).length(10, {message: "Невалиден телефон!"}).refine(
      (phone) => phone.match(/[0-9]/), {message: "Невалиден телефон!"}
    ),
    email: z.string({required_error: "Моля, въведете имейл!"}).email({message: "Невалиден имейл!"}),
    address: z.string({required_error: "Моля, въведете адрес!"}).min(5,{message: "Моля въведете валиден адрес!"}),
    username: z.string({required_error: "Моля, въведете потребителско име!"}).refine(
      (username) => username.match(/[A-Za-z]/), {message: "Символи на кирилица не са позволени!"}
    ),
    password: z.string({required_error: "Моля, въведете парола!"})
    .superRefine((pass, err) => {
      if(pass.length < 6)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата е твърде къса!"
      })
      if(!pass.match(/[0-9]/)) err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата трябва да съдържа поне една цифра!"
      })
      if(pass.length > 24)err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата е твърде дълга!"
      })
      if(!pass.match(/[A-Za-z]/)) err.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Паролата трябва да съдържа поне една буква на латиница!"
      })
      
    }),
    confirmPass: z.string({required_error: "Моля, повторете паролата!"})
  }).refine((data) => data.password === data.confirmPass, {
    message: "Паролата не съвпада!"
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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    next()
})

// app.get('/users', async (req, res) => {
//     try {
//         const users = await Users.find()
//         res.json(users)
//     } catch (error) {
//         res.status(500).json({message: error})
//     }
// })

app.post('/register', async (request, res) => {
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
