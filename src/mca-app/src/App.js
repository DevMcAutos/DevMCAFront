import './App.css';
import Nav from "./components/navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home"
import News from "./routes/0kmCars"
import Used from "./routes/usedCars"
import Contact from "./routes/contact"
import Footer from "./components/footer"
import CarDetailContainer from "./components/car/carDetailContainer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="nuevos" element={<News/>}/>
          <Route path="usados" element={<Used/>}/>
          <Route path="contacto" element={<Contact/>}/>
          <Route path="nuevos/:id" element={<CarDetailContainer/>}/>
          <Route path="usados/:id" element={<CarDetailContainer/>}/>  
        </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
