import { useEffect, useState, useRef} from "react";
import React, { useForm, } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
// import {put} from "@vercel/blob"

function Carga(){
    const [images, setImages] = useState([])
    const [response, setResponse] = useState("")
    const navbar = document.getElementsByTagName("nav")
    const footer = document.getElementsByTagName("footer")
    const divisor = document.getElementsByClassName("divisor")
    const formulario = document.getElementsByClassName("formulario-carga")
    const navbarCel = document.getElementsByClassName("nav-celular")
    const label = document.getElementsByClassName("label-carga")
    const input = document.getElementsByClassName("input-carga")
    document.title = "CARGA"

    const navigate = useNavigate()
        useEffect(()=>{
            function mostrarCookies() {
                const cookies = document.cookie.split(';');
                const array = []
                for (const cookie of cookies) {
                    const [nombre, valor] = cookie.trim().split('=');
                    array.push({nombre:nombre, valor:decodeURIComponent(valor)})
                }
                return array
            }  
            const cookies = mostrarCookies();
            let flag = false
            for (let i = 0; i < cookies.length; i++) {
                if(cookies[i].nombre === "logged"){
                    flag = true
                }
            }
            if(!flag){
                navigate("/login")     
            }
                
        },[])

    useEffect(()=>{
        divisor[0].classList.add("hidden")
        navbar[0].classList.add("hidden")
        footer[0].classList.add("hidden")
        navbarCel[0].classList.add("hidden")
        const button = document.getElementsByClassName('post-button')
    for (let i = 0; i < label.length; i++) {
        const ancho = (formulario[0].offsetWidth/2)-label[i].offsetWidth-30
        input[i].style.width = `${ancho}px`
    }
    }, [])

    const onSubmit = async (data) =>{

        const car = {
            brand: data.brand,
            model: data.model,
            year: data.year,
            kms: data.kms,
            engine: data.engine,
            version: data.version,
            fuel: data.fuel,
            traction: data.traction,
            price:data.price,
            detalle:data.detalle,
            image: []
        }

        const images = document.getElementsByClassName('car-images')
        const imagesResult = []
        for (let i = 0; i < images.length; i++) {
            console.log(images[i].value);
            if (images[i].value) {
                imagesResult.push(images[i].value)
            }
        }
        car.images = imagesResult

        const link = "https://dev-mca-api.vercel.app/newCar"
            axios.post(link, car)
            .then(response => {       
            // Manejar la respuesta exitosa
                console.log('Respuesta del servidor:', response.data);
                setResponse("Auto agregado con exito")
                setTimeout(() => {
                    setResponse("")
                }, 3000);
                
            })
            .catch(error => {
            // Manejar errores
                console.error('Error al hacer la solicitud:', error);
                
                setResponse("Fallo la carga")
            });
            
        
        
    }

    const { register, handleSubmit } = useForm();
    return(
        <div className="contenedor-carga">
            <Link to="https://www.automotoresmc.com.ar/admin"><button>Volver</button></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formulario-carga">
                    <div>
                        <label htmlFor="brand" className="label-carga">Marca:</label>
                        <input type="text" name="brand" id="car-brand" className="input-carga" {...register('brand')}/>
                    </div>
                    <div>
                        <label htmlFor="model" className="label-carga">Modelo:</label>
                        <input type="text" name="model" id="car-model" className="input-carga" {...register('model')}/>
                    </div>
                    <div>
                        <label htmlFor="year" className="label-carga">Año:</label>
                        <input type="number" name="year" id="car-year" className="input-carga" {...register('year')}/>
                    </div>
                    <div>
                        <label htmlFor="kms" className="label-carga">Kilometros:</label>
                        <input type="number" name="kms" id="car-kms" className="input-carga" {...register('kms')}/>
                    </div>
                    <div>
                        <label htmlFor="engine" className="label-carga">Motor:</label>
                        <input type="text" name="engine" id="car-engine" className="input-carga" {...register('engine')}/>
                    </div>
                    <div>
                        <label htmlFor="version" className="label-carga">Version:</label>
                        <input type="text" name="version" id="car-version" className="input-carga" {...register('version')}/>
                    </div>
                    <div>
                        <label htmlFor="fuel" className="label-carga">Combustible:</label>
                        <input type="text" name="fuel" id="car-fuel" className="input-carga" {...register('fuel')}/>
                    </div>
                    <div>
                        <label htmlFor="traction" className="label-carga">Traccion:</label>
                        <input type="text" name="traction" id="car-traction" className="input-carga" {...register('traction')}/>
                    </div>
                    <div>
                        <label htmlFor="price" className="label-carga">Precio:</label>
                        <input type="text" name="price" id="car-price" className="input-carga" {...register('price')}/>
                    </div>
                    <div>
                    <label htmlFor="detalle" className="label-carga">Detalles:</label>
                        <input type="text" name="detalle" id="car-detalle" className="input-carga" {...register('detalle')}/>
                    </div>
                    <div className="imagenes-auto-carga">
                        <label htmlFor="imagenPrincipal">Imagenes</label>
                        <input type="text" className="car-images" name="imagen1" {...register("imagen1")}/>
                        <input type="text" className="car-images" name="imagen2" {...register("imagen2")}/>
                        <input type="text" className="car-images" name="imagen3" {...register("imagen3")}/>
                        <input type="text" className="car-images" name="imagen4" {...register("imagen4")}/>
                        <input type="text" className="car-images" name="imagen5" {...register("imagen5")}/>

                        <input type="text" className="car-images" name="imagen6" {...register("imagen6")}/>
                        <input type="text" className="car-images" name="imagen7" {...register("imagen7")}/>
                        <input type="text" className="car-images" name="imagen8" {...register("imagen8")}/>
                        <input type="text" className="car-images" name="imagen9" {...register("imagen9")}/>
                        <input type="text" className="car-images" name="imagen10" {...register("imagen10")}/>
                    </div>
                    <div>
                        <div className="images-container"></div>
                        
                    </div>
                    <button className="post-button" type="submit">Subir</button>
                </div>
                <div>{response}</div>    
            </form>
        </div>
    )
};

export default Carga;