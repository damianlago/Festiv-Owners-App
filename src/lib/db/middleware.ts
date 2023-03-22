export async function middleware(data: any, apiRoute: any) { 
    
    const response = await fetch(apiRoute, {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(data),
    })

    const model = await response.json()
    return model;
}