// import { useEffect, useState } from "react";
import useFetch from "../costomHook";
// import Blog from "./blog";
import Bloglist from "./Bloglist";

const Home = () => {
    const {blogs,loading}=useFetch('http://localhost:5000/blogs')
        return ( 
        <>
        {loading && <div className="progress">
        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style={{width:300}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">loading...</div>
        </div>}
        <div className="container-fluid bg-secondary vw-100 vh-100 py-3">
           {/* <Blog/> */}
           <Bloglist
           blogs={blogs}
         //  
          />
        </div>
        </>
     );
}
 
export default Home;