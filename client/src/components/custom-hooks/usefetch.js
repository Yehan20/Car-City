import axios from "axios";
import {useCallback} from "react";
import {useEffect, useState} from "react";

export const useFetch =  (url) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = useCallback(async()=>{
        const product = await axios.get(url)
        console.log(product.data)
        setProducts(product.data);
        setLoading(false)
    
    },[url])

    useEffect(()=>{
         console.log('use effect called')
         getProducts();
    },[getProducts])

    return {products, loading}
}
