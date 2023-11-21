import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes,} from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
      
      </Routes>
      
      
      </ BrowserRouter>
      
    </div>
  );
}

export default App;
