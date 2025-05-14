'use server'

import { LoginSchema } from "app/pages/validations/loginSchema"

export default async function submitLogin(loginData: LoginSchema){

    await fetch('http://localhost:1407/login', 
      {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
      })
      .then(res => res.json())
      .then((data) => {
        if(typeof window !== undefined){
          localStorage.setItem("jwtToken", data.token)
          console.log("local storage token?: ", localStorage.getItem("jwtToken"))
        }
        console.log("Token: ", data.token)
      })
      .catch((error) => {
        console.log("Passing login data failed: ",error)
      }) 
}