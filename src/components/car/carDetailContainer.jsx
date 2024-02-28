import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CarDetail from "./carDetail"
import carsController from "../../service/getCars"


function ItemDetailContainer(){
    const [car, setCar] = useState([])
    const params = useParams()
    useEffect(()=>{
        carsController.getCarById(params.id)
        .then((data)=>{
            setCar(data)
            const imagenesCont = document.getElementsByClassName("car-individual-images")
            const imgMinCont = document.getElementsByClassName("imagenes-miniatura")
            imagenesCont[0].innerHTML = `<img src=${data.image[0]} alt="imagen del auto" id='car-image'/>`
                        for (let index = 0; index < data.image.length; index++) {
                        imgMinCont[0].innerHTML += `<img src=${data.image[index]} class="img-list"/>`
                        const imgMiniatura = document.getElementsByClassName("img-list")
                        const imageActive = document.getElementById("car-image")
                        for (let index = 0; index < 100; index++) {
                            imgMiniatura[index]?.addEventListener('click', ()=>{              
                            imageActive.src = data.image[index]
                            })
                        }
                        }
        })
        .catch(()=>{
            console.log("error");
        })
    }, [params.id])
    return(
        <div>
            <CarDetail car={car}{...car}/>
        </div>
    );
};

export default ItemDetailContainer;

