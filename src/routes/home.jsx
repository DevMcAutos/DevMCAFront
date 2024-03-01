import axios from "axios"
import { useState, useEffect} from "react"
import carsController from "../service/getCars"


function Home(){
    document.title = "MC Automotores | Inicio"
    const [cars, setCars] = useState([])
    const [limite, setLimite] = useState(0)
    useEffect(()=>{
        const name = ""
        const filters = {}
        const nuevo = false
        if (limite < 5) {
            setLimite(limite+1)
        carsController.getCars(name,nuevo,filters)
        .then(data=>{
            setCars(data)
            console.log(data);
        })
        }
    }, [])

    return(
        <div>
            <div className="carrousel">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
        <img src="/img/Header1.jpeg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
        <img src="/img/Header1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
        <img src="/img/Header1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
</div>

            </div>
            <div className="descripcion-container">
                <h1>SOBRE NOSOTROS</h1>
                <p>Somos una empresa familiar ubicada en la entrada de Colonia Caroya especializados en camionetas y en vehículos diesel.
                    Brindamos el servicio para facilitarte el cambio de tu vehiculo u obtener tu primer auto!. 
                    Vendemos 0km y usados (autos y camionetas) recibimos tu usado no importa el año! 
                    Consultar por disponibilidad y precio de los 0km
                    Nos manejamos con todas las formas de pago</p>
            </div>
            <p className="algunos-de-nuestros">Algunos de nuestros autos:</p>
                <div className="nuestros-autos">
                {/* Auto1 */}
                <div class="card">
                    <img class="card-img-top" src={cars[0]?.image[0]} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{cars[0]?.name}</h5>
                    <p class="card-text">${cars[0]?.price}</p>
                    <a href={`https://automotoresmc.com.ar/usados/auto/${cars[0]?._id}`} class="boton-ver">Ver</a>
                </div>
                </div>
            {/* Auto 2 */}

            <div class="card">
                <img class="card-img-top" src={cars[0]?.image[0]} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{cars[0]?.name}</h5>
                    <p class="card-text">${cars[0]?.price}</p>
                    <a href={`https://automotoresmc.com.ar/usados/auto/${cars[0]?._id}`} class="boton-ver">Ver</a>
                </div>
            </div>
            {/* Auto 3 */}
            <div class="card">
                <img class="card-img-top" src={cars[0]?.image[0]} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{cars[0]?.name}</h5>
                    <p class="card-text">${cars[0]?.price}</p>
                    <a href={`https://automotoresmc.com.ar/usados/auto/${cars[0]?._id}`} class="boton-ver">Ver</a>
                </div>
            </div>
            {/* Auto 4 */}
            <div class="card">
                <img class="card-img-top" src={cars[0]?.image[0]} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{cars[0]?.name}</h5>
                    <p class="card-text">${cars[0]?.price}</p>
                    <a href={`https://automotoresmc.com.ar/usados/auto/${cars[0]?._id}`} class="boton-ver">Ver</a>
            </div>
            </div>
            </div>
        </div>

    );
};

export default Home;