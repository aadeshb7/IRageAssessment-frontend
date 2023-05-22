import React from 'react';
import './App.css'
import Homepage from './Components/Homepage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import InsertDataComponent from './Components/InsertDataComponent';
import InsertMultipleDataComponent from './Components/InsertMultipleDataComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/insertData/*" element={<InsertDataComponent />} />
          <Route path="/insertMultipleData/*" element={<InsertMultipleDataComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;