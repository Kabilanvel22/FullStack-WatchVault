import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login/login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import AddOrUpdate from './components/AddOrUpdate/AddOrUpdate';
import Welcome from './components/Welcome/Welcome';
import About from './components/Aboutus/About'
import Contactus from './components/Contactus/Contactus';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/list" element={<Home />} />
          <Route path="/add" element={<AddOrUpdate />} />
          <Route path="/update/:id" element={<AddOrUpdate />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;