'use server'

const base_url: string = "http://localhost:1407"

export default async function Redirect(route: string, token: string){
  try {
    const response = await fetch(`${base_url}${route}`, 
      {
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      signal: AbortSignal.timeout(2000)
      })

      if(response.status == 400 || response.status == 401)
        return({success: false})
      else{
        return({success: true})
      }
        
    }
      catch(error){
        console.log("Passing data failed: ", error)
        return({success: false})
      }
      
      
}