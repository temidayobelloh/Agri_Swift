import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './Components/Pages/Home/home';
import About from './Components/Pages/About/about_us';
import Products from './Components/Pages/Farmers/products';
import Questions from './Components/Pages/Buyers/questions';
import SignUp from './Components/Pages/SignUp/sign-up';

const App=()=> {
  return (
    <BrowserRouter>
    <header>
    <nav>
    <h1>AgriSwift</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about"> About Us</NavLink>
    <NavLink to="/farmers"> Farmers </NavLink>
    <NavLink to="/buyers"> Buyers</NavLink>
    <NavLink to="/sign_up">Sign Up</NavLink>
    </nav>
    </header>
    <main>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/farmers" element={<Products/>}/>
    <Route path="/buyers" element={<Questions/>}/>
    <Route path="/sign_up" element={<SignUp/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  );
};

export default App;
