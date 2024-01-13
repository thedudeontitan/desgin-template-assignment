
export default async function getProduct(id:string){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`,{ cache: 'force-cache' })

    if(!response.ok){
        throw new Error("Failed to fetch user")
    }
    return response.json()
}   