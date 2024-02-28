import { useEffect } from "react"
import { useState } from "react"
import carsController from "../service/getCars"
import { useNavigate } from "react-router-dom"

import AdminList from "../components/admin-list"


function Admin(){
    const [cars, setCars] = useState([])
    const navbar = document.getElementsByTagName("nav")
    const footer = document.getElementsByTagName("footer")
    const divisor = document.getElementsByClassName("divisor")
    const navbarCel = document.getElementsByClassName("nav-celular")
    document.title = "ADMINISTRACION"

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
    }, [])



    useEffect(()=>{
        const name = ""
        const nuevo = false
        const filters = {}

        carsController.getCars(name,nuevo,filters)
        .then((data)=>{
            setTimeout(() => {
                setCars(data)
            }, 1500);
        }) 
    }, [cars]); 

    return(
        <AdminList cars={cars}/>
    )
}

export default Admin