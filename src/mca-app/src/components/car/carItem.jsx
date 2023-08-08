import { Link } from "react-router-dom"

function Item({cars}){
    return(
        
        <Link to={cars._id}><p>{cars.name}</p></Link>
    )
};

export default Item;