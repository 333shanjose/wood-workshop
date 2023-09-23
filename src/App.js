
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

import Popper from'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';




import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
