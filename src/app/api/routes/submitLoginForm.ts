'use server'

import { LoginSchema } from "app/pages/validations/loginSchema"

export default async function submitLogin(loginData: LoginSchema){

    await fetch('http://localhost:1407/login', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData)
          })
          .then(res => res.json())
          .catch((error) => {
            console.log("Passing new user data failed: ",error)
          }) 

}