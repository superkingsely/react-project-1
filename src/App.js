import React from 'react';
import Home from './components/home';
import { Routes ,Route, } from 'react-router-dom';
import Navbar from './components/navbar';


const App = () => {
    return ( 
        <>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           
        </Routes>
        </>
     );
}
 
export default App;