import React from 'react';
import Home from './components/home';
import { Routes ,Route, } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './components/create';
import Blogdetails from './components/blogdetail';
import Pagenotfound from './components/pagenotfound';


const App = () => {
    return ( 
        <>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/create' element={<Create/>}/>
               <Route path='/blogs/:id' element={<Blogdetails/>}/>
               {/* <Route path='*' element={<Pagenotfound/>} */}
            </Routes>
        </>
     );
}
 
export default App;