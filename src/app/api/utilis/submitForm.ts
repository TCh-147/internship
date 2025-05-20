'use server'

const base_url: string = "http://localhost:1407"

export default async function submitForm(route: string, formData:Object){
  try {
    const response = await fetch(`${base_url}${route}`, 
      {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
      })

      if(response.status == 400 || response.status == 401)
        return({success: false})
      else
        return({success: true})
    }
      catch(error){
        console.log("Passing data failed: ", error)
        return({success: false})
      }
      
      
}