import './App.css';
import Nav from "./components/navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home"
import News from "./routes/0kmCars"
import Used from "./routes/usedCars"
import Contact from "./routes/contact"
import Footer from "./components/footer"
import CarDetailContainer from "./components/car/carDetailContainer"
import NavBarPhone from './components/phoneMenu';
import Admin from './routes/admin';
import Carga from './components/carga'
import Modificar from "./components/modificar"
import Login from "./routes/login"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav></Nav>
      <NavBarPhone/>
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="nuevos" element={<News/>}/>
          <Route path="usados/:pag" element={<Used/>}/>
          <Route path="contacto" element={<Contact/>}/>
          <Route path="nuevos/:id" element={<CarDetailContainer/>}/>
          <Route path="usados/auto/:id" element={<CarDetailContainer/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path="admin/carga" element={<Carga/>}/>
          <Route path="admin/modificar/:id" element={<Modificar/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
