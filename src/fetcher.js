const BASE_URL = "http://localhost:3000"

export const fetcher =async (url)=>{
    let responseObject = {errorMessage:'', data:[]}
    try {
        const response = await fetch(BASE_URL+url)
        if(!response.ok){
            throw new Error(`Http status ${response.status}`)
        }
        const responseData = await response.json();
        responseObject.errorMessage='';
        responseObject.data = responseData;
    }
    catch(err){
        responseObject.errorMessage=err.message;
    }
    return responseObject;
}

export const getCategory = ()=>{
    return fetcher("/categories");
}


export const getProducts = (id)=>{
    return fetcher("/products?catId="+id);
}

export const getProductById = (id)=>{
    return fetcher("/products/"+id);
}