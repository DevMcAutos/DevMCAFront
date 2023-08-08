import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import CarDetail from "./carDetail"
import carsController from "../../service/getCars"


function ItemDetailContainer(){
    const [car, setCar] = useState([])
    const params= useParams()
    useEffect(()=>{
        carsController.getCarById(params.id)
        .then((data)=>{
            setCar(data)
        })
        .catch(()=>{
            console.log("error");
        })
    }, [params.id])
    return(
        <div>
            <CarDetail car={car}{...car} />
        </div>
    );
};

export default ItemDetailContainer;