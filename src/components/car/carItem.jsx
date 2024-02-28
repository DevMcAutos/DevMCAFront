import { Link } from "react-router-dom"

function Item({cars}){
    
    return(
        <Link to={`https://www.automotoresmc.com.ar/usados/auto/${cars._id}`}>
            <div className="car-item-container">
                <img src={cars.image[0]} alt="" />
                <p>{cars.name}</p>
            </div>
        </Link>
    )
};

export default Item;