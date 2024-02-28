import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CarDetail(car){
    document.title = `${car.name}`
    useEffect(()=>{
        const botonBack = document.getElementById("back-menu-button")
        botonBack.addEventListener('click', ()=>{   
            setTimeout(() => {
                const cars = document.getElementsByClassName('car-item-container')     
                for (let index = 0; index < 100; index++) {
                cars[index]?.addEventListener('click', ()=>{
                    setTimeout(() => {
                        const url = window.location.href
                        const segmentos = url.split('/');
                        const ID= segmentos[segmentos.length - 1]
                        const imagenesCont = document.getElementsByClassName("car-individual-images")
                        fetch(`http://localhost:8080/getcars/${ID}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('La solicitud no fue exitosa');
                            }
                            return response.json(); 
                        })
                        .then(data => {
                        })
                        
                        
                    }, 500);
                })
            }     
            }, 200);
        })
    },[])
    
        
    return(
        <div>
            <Link to="javascript:void(0)" onClick={()=>window.history.back()}><button id='back-menu-button'>Volver al menú</button></Link>
            <div className='car-individual-container'>
                    <div className='car-individual-images'>    
                    </div>
                    <div className='car-info'>
                        <p>Marca: <strong>{car.brand}</strong></p>
                        <p>Modelo: <strong>{car.model}</strong></p>
                        <p>Año: <strong>{car.year}</strong></p>
                        <p>Motor: <strong>{car.engine}</strong></p>
                        <p>Combustible:<strong> {car.fuel}</strong></p>
                        <p>Traccion: <strong>{car.traction}</strong></p>
                        <p>Version: <strong>{car.version}</strong></p>
                        <p>Kilometros: <strong>{car.kms}</strong></p>
                        <p id='price'>Precio: $<strong>{car.price}</strong></p>
                    </div>
                    <div className='imagenes-miniatura'>    
                    </div>
                </div>  
                <div className='imagenes-miniatura'>    
                    </div>
            </div>
    );
};

export default CarDetail;
