import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';
import Testing from './testing';


function App() {
  return(
    <> 
    <h4>Ecommerce Projectr</h4>
  
    <Testing />
     </>
  );
  
}

export default App
