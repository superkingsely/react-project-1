import  {useEffect, useState } from 'react';

const useFetch=(url)=>{
    const [blogs,setBlogs]=useState([])
    const [loading,setLoading]=useState(true)

    const getdata=async()=>{
        const res=await fetch(url)
        const data=await res.json()
        setBlogs(data)
        setLoading(false)
        console.log(data)
    }

    // const isloading=()=>{
    //    
    //     // setTimeout(()=>{
    //     //     setLoading(false)
    //     // },1000)
    // }

    useEffect(()=>{
        // isloading()
        getdata()
        

        // console.log(getdata())
        console.log('url updated')
        return(()=>{console.log('compwill mount run')})
        // eslint-disable-next-line
    },[url])

    return{blogs,loading}

}
export default useFetch