import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import Service from './components/Pages/Service';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' exact element={<Service/>}/>
        <Route path='/products' exact element={<Product/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
