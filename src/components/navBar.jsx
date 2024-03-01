import { NavLink , Link} from "react-router-dom";    

function Nav (){
    return(
        <nav id="navbar" className="close-menu">
            <Link to="/"><img src="/img/logo2.png" alt="logo.svg"  id="logo-pc"/></Link>
            <p id="menu-button" >Cerrar menu X</p>
            <div className="button-container">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="nuevos">0KM</NavLink>
                <NavLink to="usados/1" id="usadosButton">Usados</NavLink>
                <NavLink to="contacto">Contacto</NavLink>
            </div>
            <div className="invisible"><img src="/img/logo.png" alt="invisible" /></div>
        </nav>  
    );
};

export default Nav;