'use server'

import { validationSchema, ValidationSchema } from "app/pages/validations/registerSchema"
import axios from "axios"
import { Server } from "http"

export async function submitForm(registerData: ValidationSchema){
  
    // console.log("await method data: ",JSON.stringify(registerData))
    

    await fetch('http://localhost:1407/register', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData)
      })
      .then(res => res.json())
      .then((registerData) => {
        const validatedUser = validationSchema.safeParse(registerData)
        if(!validatedUser.success){
          console.error("validated user error: ",validatedUser.error)
          return
        }
        console.log("validated user data: ",validatedUser.data)
      })
      .catch((error) => {
        console.log("Passing new user data failed: ",error)
      }) 

    // await axios.post('https://localhost:1407/register', JSON.stringify(registerData))
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

}