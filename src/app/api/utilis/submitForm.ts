'use server'

const base_url: string = "http://localhost:1407"

export default async function submitForm(route: string, formData:any){
  try {
    const response = await fetch(`${base_url}${route}`, 
      {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
      })

      const data = await response.json()
      return({success: true, data})
    }
      catch(error){
        console.log("Passing data failed: ", error)
        return({success: false})
      }
      
      
}