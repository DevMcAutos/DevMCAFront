import { useEffect, useState } from "react";
import React, { useForm } from 'react-hook-form';
import CarTable from "./carTable"
import carsController from "../../service/getCars"

export default function CarList(nuevo){
    const [rows, setRows] = useState([])
    const [name, setName] = useState([])
    const [noResults, setNoResults] = useState([])
    useEffect(()=>{
        carsController.getCars(name,nuevo)
        .then((data)=>{
            if(data.msg === "No hay resultados"){
                setNoResults(data.msg)
                setTimeout(() => {
                    setNoResults("")
                }, 2000);
            }else{
                setRows(data)
            }
            
        })
        .catch(()=>{
            console.log("error");
        })
    }, [name])

    const onSubmit = (data) =>{
        setName(data.name)
    }
    const reset = ()=>{
        const form = document.getElementsByClassName("form-control-name")
        form.name.value = ""
        setName("")
    }

    const { register, handleSubmit } = useForm();
    return(
        <div>  
            <div className="row">
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                
            <div className="mb-3">
                <input type="text" className="form-control-name" placeholder="Buscar autos "{...register('name')} />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
            <form onSubmit={handleSubmit(reset)}>
                <button type="submit">Ver todos</button>
            </form>
                </div>
                <br />
                <br />
                <p>{noResults}</p>
                <div>
                    <CarTable items = {rows}>
                    </CarTable>
                </div>
                
            </div>
            
        </div>
    );
};
