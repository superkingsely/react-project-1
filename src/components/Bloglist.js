// import Blog from "./blog";

import { Link ,useNavigate} from "react-router-dom";
import useFetch from "../costomHook";

const Bloglist = ({blogs}) => {
const navigate=useNavigate()
// const {blogs,loading}=useFetch()

    const handledelete=()=>{
       
        // const data = blogs.map(blog=>blog)
        // fetch(' http://localhost:5000/blogs/' + data.id,{
        //     method:'DELETE'
        // })
        // // .then(()=>{
        // //     navigate('/')
        // // })

        // blogs.filter(blog=>blog.id !==data.id)
    }
    return ( 
        <>
            {
                blogs.map(blog=>(
                    <div key={blog.id}>
                    <div className="card shadow m-2">
                    <div className="card-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.author}</p> 
                                </div>
                                <div className="col-6 text-end">
                                    <Link to={`/blogs/${blog.id}`}>
                                    <button className="btn btn-info">Blogdetail</button>
                                    </Link>
                                    <button 
                                    onClick={()=>{handledelete()}}
                                    className="btn ms-2 btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                     </div>
                    {/* <Blog/> */}
                    </div>
                ))
            }
        </>
     );
}
 
export default Bloglist;