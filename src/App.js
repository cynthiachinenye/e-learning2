import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes,} from 'react-router-dom';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      
      
      </Routes>
      
      
      </ BrowserRouter>
      
    </div>
  );
}

export default App;
