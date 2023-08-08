import { NavLink } from "react-router-dom";    

function Nav (){
    return(
        <nav id="navbar" className="close-menu">
            <img src="" alt="logo.svg"  id="logo-pc"/>
            <p id="menu-button" >Cerrar menu X</p>
            <div className="button-container">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="nuevos">0KM</NavLink>
                <NavLink to="usados">Usados</NavLink>
                <NavLink to="contacto">Contacto</NavLink>
            </div>
            <div className="invisible"><img src="" alt="invisible" /></div>
        </nav>  
    );
};

export default Nav;