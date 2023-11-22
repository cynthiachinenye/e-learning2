import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes,} from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Footer from "./Components/Footer";
import Courses from "./Pages/Courses";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/courses" element={<Courses/>}/>
      
      
      </Routes>
      <Footer/>
      
      </ BrowserRouter>
      
    </div>
  );
}

export default App;
