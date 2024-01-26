import { useState } from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import Landing from './view/landing/landing';
import Cards from './components/cards/cards';
import Form from './components/Form/Form';
import Detail from './view/detail/detail';
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
          <Route path= "/form" element={<Form />} />
       </Routes>
      
      </div>
  
  );
}

export default App;
