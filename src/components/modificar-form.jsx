import { useEffect, useState } from "react";
import React, { useForm } from 'react-hook-form';
import { Link } from "react-router-dom"
import axios from "axios";

function ModificarForm(car) {
    const [response, setResponse] = useState("")
    function onSubmit(data){
        axios.put(`https://dev-mca-api.vercel.app/updateCar/${car._id}`, data)
        .then(res=>{
            console.log(res);
            setResponse("Auto modificado")
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const { register, handleSubmit } = useForm();
    return(
    <div>
        <Link to="https://www.automotoresmc.com.ar/admin"><button>Volver</button></Link>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formulario-carga">
                <div>
                    <label htmlFor="brand" className="label-carga">Marca:</label>
                    <input type="text" name="brand" id="car-brand" className="input-carga" placeholder={car.brand}{...register('brand')}/>
                </div>
                <div>
                    <label htmlFor="model" className="label-carga">Modelo:</label>
                    <input type="text" name="model" id="car-model" className="input-carga" placeholder={car.model}{...register('model')}/>
                </div>
                <div>
                    <label htmlFor="year" className="label-carga">Año:</label>
                    <input type="number" name="year" id="car-year" className="input-carga" placeholder={car.year}{...register('year')}/>
                </div>
                <div>
                    <label htmlFor="kms" className="label-carga">Kilometros:</label>
                    <input type="number" name="kms" id="car-kms" className="input-carga" placeholder={car.kms}{...register('kms')}/>
                </div>
                <div>
                    <label htmlFor="engine" className="label-carga">Motor:</label>
                    <input type="text" name="engine" id="car-engine" className="input-carga" placeholder={car.engine}{...register('engine')}/>
                </div>
                <div>
                    <label htmlFor="version" className="label-carga">Version:</label>
                    <input type="text" name="version" id="car-version" className="input-carga" placeholder={car.version}{...register('version')}/>
                </div>
                <div>
                    <label htmlFor="fuel" className="label-carga">Combustible:</label>
                    <input type="text" name="fuel" id="car-fuel" className="input-carga" placeholder={car.fuel}{...register('fuel')}/>
                </div>
                <div>
                    <label htmlFor="traction" className="label-carga">Traccion:</label>
                    <input type="text" name="traction" id="car-traction" className="input-carga" placeholder={car.traction}{...register('traction')}/>
                </div>
                <div>
                    <label htmlFor="price" className="label-carga">Precio:</label>
                    <input type="text" name="price" id="car-price" className="input-carga" placeholder={car.price}{...register('price')}/>
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
                <button className="post-button" type="submit">Modificar</button>
            </div>
            <p>{response}</p>    
        </form>
    </div>
    )
}

export default ModificarForm