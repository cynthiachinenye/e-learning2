import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route,Routes} from 'react-router-dom';
import Header from "./Pages/Header";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Route>
      <Routes element={<Header/>}/>
      
      
      </Route>
      
      
      </Router>
      
    </div>
  );
}

export default App;
