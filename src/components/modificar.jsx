import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import carsController from "../service/getCars"
import ModificarForm from "./modificar-form"

function Modificar(){
    const [car, setCar] = useState()
    const params = useParams()
    const navbar = document.getElementsByTagName("nav")
    const navbarCel = document.getElementsByClassName("nav-celular")
    const footer = document.getElementsByTagName("footer")
    const divisor = document.getElementsByClassName("divisor")
    const formulario = document.getElementsByClassName("formulario-carga")
    const label = document.getElementsByClassName("label-carga")
    const input = document.getElementsByClassName("input-carga")


    const navigate = useNavigate()
        useEffect(()=>{
            function mostrarCookies() {
                const cookies = document.cookie.split(';');
                const array = []
                for (const cookie of cookies) {
                    const [nombre, valor] = cookie.trim().split('=');
                    console.log(`${nombre}: ${decodeURIComponent(valor)}`);
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
        carsController.getCarById(params.id)
        .then((data)=>{
            setCar(data)
        })
        divisor[0].classList.add("hidden")
        navbar[0].classList.add("hidden")
        footer[0].classList.add("hidden")
        navbarCel[0].classList.add("hidden")
    for (let i = 0; i < label.length; i++) {
        const ancho = (formulario[0].offsetWidth/2)-label[i].offsetWidth-30
        input[i].style.width = `${ancho}px`
    }
    },[params.id])
    document.title = "MODIFICAR"

    return(
        <div>
            <ModificarForm car={car}{...car}/>
            <title>MODIFICAR</title>
        </div>
        
    )
}

export default Modificar