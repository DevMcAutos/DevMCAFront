import React, { useForm } from 'react-hook-form';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom"

function Login(){
    const [err,setErr] = useState("")
    const navigate = useNavigate()
    const navbar = document.getElementsByTagName("nav")
    const footer = document.getElementsByTagName("footer")
    const divisor = document.getElementsByClassName("divisor")
    
    const onSubmit = (data)=>{
        axios.post("http://localhost:8080/login", data)
        .then(res =>{
            document.cookie = `logged=true; max-age=${60*10}; path=/`
        }) .catch(err=>{
            setTimeout(() => {
                setErr("")
            }, 2000);
            setErr("Usuario o contraseña invalidas")
        })
        setTimeout(() => {
            navigate("/admin")
        }, 1000);
        
        
    }
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        divisor[0].classList.add("hidden")
        navbar[0].classList.add("hidden")
        footer[0].classList.add("hidden")
    }, [])

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" name="username" id="username" {...register('username')}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password"{...register('password')}/>
                </div>
                <button>Aceptar</button>
                <p>{err}</p>
            </form>
        </div>
    )
}

export default Login