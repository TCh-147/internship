'use server'

const base_url: string = "http://localhost:1407"

export default async function submitForm(route: string, formData:Object){
  try {
    const response = await fetch(`${base_url}${route}`, 
      {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      signal: AbortSignal.timeout(2000)
      })

      if(response.status == 400 || response.status == 401)
        return({success: false})
      else{
        const token = await response.json()
        return({token, success: true})
      }
    }
      catch(error){
        console.log("Passing data failed: ", error)
        return({success: false})
      }
      
      
}