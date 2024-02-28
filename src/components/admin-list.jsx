import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import axios from "axios"

function AdminList({cars}){
    const [response, setResponse] = useState("")
    const navigate = useNavigate()
    return(
        <div className="admin-container">
            <div className="Noblur">
        <div>
            {cars && cars.map((cars, indice) => (
            <div key={indice} className={indice % 2 === 0 ? 'car-item1' : 'car-item2'}>
                <img src={cars.image[0]} alt="" className="imagen-miniatura"/>
                <p className="nombre-admin">{cars.name}</p>
                <div className="editar-borrar-cont">
                    <Link to={`https://www.automotoresmc.com.ar/admin/modificar/${cars._id}`}><img src="/img/lapiz-editar2.png" alt="boton-editar" className="editar-button" width="10%"/></Link>
                    <p className="borrar-button" onClick={()=>{
                        const contenedor = document.getElementsByClassName("Noblur")
                        const cancelButton = document.getElementsByClassName("cancel-button")
                        const confirmButton = document.getElementsByClassName("confirm-button")
                        const contPregunta = document.getElementsByClassName("confirm-container")
                        contenedor[0].classList.add("blur")
                        contPregunta[0].classList.remove("hidden")
                        contPregunta[0].classList.add("visible")

                        cancelButton[0].addEventListener("click", ()=>{
                            contenedor[0].classList.remove("blur")
                            contPregunta[0].classList.add("hidden")
                            contPregunta[0].classList.remove("visible")
                        })

                        function deleteCar(){
                            contenedor[0].classList.remove("blur")
                            contPregunta[0].classList.add("hidden")
                            contPregunta[0].classList.remove("visible")
                            axios.delete(`https://dev-mca-api.vercel.app//deleteCar/${cars._id}`)
                            .then(res=>{
                                console.log(res);
                                setResponse("Auto eliminado")
                                setTimeout(() => {
                                    setResponse("")
                                }, 3000);
                            })
                            .catch(err=>{
                                console.log(err);
                            })
                            navigate("/admin")
                            confirmButton[0].removeEventListener("click",deleteCar)
                        }
                        
                        confirmButton[0].addEventListener("click", deleteCar)                       
                    }}>X</p>
                </div>
            </div>
            ))}
        </div>
            <div className="button-carga-container">
                <Link to={`https://www.automotoresmc.com.ar/admin/carga`}> <button className="button-cargar-auto">Cargar Auto</button></Link>
                <p>{response}</p>
            </div>
        </div>
            <div className="confirm-container hidden">
                <p className="pregunta">Estas seguro que queres borrar</p>
                <button className="confirm-button">Si</button>
                <button className="cancel-button">No</button>
            </div>
        </div>
    )
}

export default AdminList