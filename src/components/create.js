import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import useFetch from '../costomHook'
import Loading from '../components/loading'
const Create = () => {
    // const {loading}=useFetch()
    const [loading,setLoading]=useState(false)
    // const {blogs,loading}=useFetch(' http://localhost:5000/blogs',{
    //     method:'POST',
    //     header:{"Content-Type":"Application/json"},
    //     body:JSON.stringify(blogs)
    // })
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario')
    const navigate =useNavigate()

    const {id}=useParams()

    // const postdata=async(blog)=>{

    //     const data=await fetch('http://localhost:5000/blogs',{
    //         method:'POST',
    //         header:{"Content-Type":"Application/json"},
    //         body:JSON.stringify(blog)
    //     })
    //     const isloading=await setLoading(false)
    //     const comment=await console.log('new blog added')
    //     return data
    // }

    const handlesubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        
        const blog={title,body,author}
       

        fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setLoading(false)
            navigate('/')
        })

        // postdata(blog)
        console.log(blog)
    }
    console.log(title)
    useEffect(()=>{
        setLoading(false)
    })
    return ( 
        <>
        {loading && <Loading/>}
        <div className="bg-secondary vh-100 py-3 " >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">

             <form 
             className="shadow" 
             onSubmit={handlesubmit}
             >
                <div className="form-floating mb-3">
                <input 
                type="name"
                className="form-control" 
                placeholder="name@example.com"
                id="floatingInput"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                required
                />
                <label for="floatingInput">Blog title</label>
                </div>

               <div class="form-floating">
                <textarea 
                class="form-control" 
                placeholder="name@example.com"
                id="floatingTextarea"
                style={{height:100}}
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label for="floatingTextarea">Blogs body</label>
                </div>

                <div class="mt-3">
                <div class="form-floating">
                <select 
                class="form-select"             id="floatingSelectGrid"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option selected>mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <label for="floatingSelectGrid">Blog author:</label>
                </div>
            </div>
            {!loading && 
            (
            <button className="btn btn-lg btn-info w-50 m-2">submit</button>
            )}
           { loading && (
                <button className="btn btn-lg btn-info w-50 m-2">submit</button>
            )}
           </form>


                    </div>
                </div>
            </div>
           
        </div>
        </>
     );
}
 
export default Create;