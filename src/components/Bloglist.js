// import Blog from "./blog";

const Bloglist = ({blogs}) => {
    return ( 
        <>
            {
                blogs.map(blog=>(
                    <div key={blog.id}>
                    <div className="card shadow m-2">
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.author}</p>   
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