import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Pagination ({cars}){
    const params = useParams()
    const [paginas, setPaginas] = useState(Math.ceil(cars.length/2))
    const [array, setArray] = useState([])
    const techo =  Math.ceil(cars.length/12)
    useEffect(()=>{
        setPaginas(Math.ceil(cars.length/12))
        const arrayAux = []
        for (let index = 0; index < techo; index++) {
            arrayAux.push(index+1) 
        }
        setArray(arrayAux)
    },[cars])
    return(
        <div className="pagination" role="navigation" aria-label="pagination">
            {1 < params.pag ? <Link to={`http://localhost:3000/usados/${parseInt(params.pag)-1}`} className="pagination-previous">Anterior</Link> : <p className="invisiblePag">Anterior</p>}         
            <ul className="pagination-list">
            {array && array.map(pag=>{
                return(
                    <Link to={`http://localhost:3000/usados/${pag}`}><li className="pagination-link">{pag}</li></Link>
                )   
            })}
            </ul>
            {paginas > params.pag ? <Link to={`http://localhost:3000/usados/${parseInt(params.pag)+1}`} className="pagination-next">Siguiente</Link> : <p className="invisiblePag">Siguiente</p>}
            
        </div>
    )
}

export default Pagination