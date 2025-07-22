let getData = async()=>{
    try{
        let response = await fetch("https://fakestoreapi.com/products")
        console.log(response)

        let data = await response.json()
        console.log(data)
    }
    catch(e)
    {
        console.log(e);    
    }
}
getData()