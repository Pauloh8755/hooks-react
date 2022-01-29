import reac, { useEffect, useState } from "react"

const useFetch = (url, method = 'get')=>{
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })
    useEffect(async ()=>{
        const res =  await fetch(url, {method})
        const json = await res.json()
        await setResponse({
            data: json,
            loading: false
        })
    }, [url, method])
    return response
}

export{
    useFetch
}
