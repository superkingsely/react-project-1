const Blog = () => {
    return ( 
        <>
            <div className="card shadow m-2">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"> 
                            <h5 className="card-title">Blog title</h5>
                              <p className="card-text">author</p></div>
                            <div className="col-6">
                                <button className="btn btn-info">Blogdetail</button>
                            </div>
                        </div>
                    </div>
                      
                </div>
            </div>
        </>
     );
}
 
export default Blog;