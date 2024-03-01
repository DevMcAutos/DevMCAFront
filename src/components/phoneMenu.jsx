import { Link } from "react-router-dom"
function NavBarPhone(){
    return(
        <div className="nav-celular">
        <Link to ="/"><img src="/img/logo.png" alt="" id="logo-celular"/></Link>
        <img src="/img/menu.png" alt="" id="boton-abrir-menu"/>
        </div>
    )
}

export default NavBarPhone