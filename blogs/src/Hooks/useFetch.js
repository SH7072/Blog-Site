import { useEffect,useState } from "react";

const useFetch = (url) => {
    
    const [data,setData]=useState(null);
   

    useEffect(()=>{
        
        setTimeout(()=>{

            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
            })
        },1000);
    },[url]);

    return {data};
}
 
export default useFetch;