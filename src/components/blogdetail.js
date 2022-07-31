import { useNavigate, useParams } from "react-router";
import useFetch from "../costomHook";
import Loading from "./loading";


const Blogdetails = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const {blogs:blog,loading}=useFetch('http://localhost:5000/blogs/' + id)

    const handledelete=()=>{
        fetch('http://localhost:5000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    return ( 
        <>
        {loading && <Loading/>}
            {
                blog && 
                <div className="container-fluid bg-secondary vh-100">
                    <div className="row justify-content-center h-75  ">
                        <div className="col-8 bg-light rounded shadow m-3  p-3  w-75">

                       
                        <article>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                        </article>

                       <button 
                       onClick={handledelete}
                       className="btn mt-5  btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
                
            }
        </>
     );
}
 
export default Blogdetails;