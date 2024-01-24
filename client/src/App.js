import {Routes, Route, useLocation} from "react-router-dom"
import { useState } from 'react';
import Landing from './screens/Landing/landing';
import Cards from './components/Cards/Cards';
import Detail from './screens/Detail/detail';
import Nav from './components/nav/nav';
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
       </Routes>
      
      </div>
  
  );
}

export default App;
