import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">The house of chi Blog</span>
                    <div>
                    <Link to='/' className="me-2 text-decoration-none">Home</Link>
                    <Link to='/create' className='text-decoration-none'>New Blog</Link>
                    </div>

                </div>
            </nav>
        </>
     );
}
 
export default Navbar;