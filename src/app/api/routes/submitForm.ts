'use server'

import { RegisterSchema } from "app/pages/validations/registerSchema"

export async function submitForm(registerData: RegisterSchema){


    await fetch('http://localhost:1407/register', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData)
      })
      .then(res => res.json())
      .catch((error) => {
        console.log("Passing new user data failed: ",error)
      }) 

}