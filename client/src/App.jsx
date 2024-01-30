import { useState } from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import Landing from './screens/Landing/landing';
import Detail from './screens/Detail/detail';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Nav from './components/Nav/Navbar';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation();
  
  return (   
      <div>
        {location.pathname !== "/" ? <Nav /> : ""}
    
       <Routes>
          <Route path="/home" element={<Cards currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
          <Route path= "/detail/:id" element= {<Detail />} />
          <Route path= "/" element={<Landing />} />
          <Route path= "/form" element={<Form />} />
       </Routes>
      
      </div>
  
  );
}

export default App;
