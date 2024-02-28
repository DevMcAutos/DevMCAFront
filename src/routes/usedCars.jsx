
import CarList from "../components/car/carList"

function Used(){
    document.title = "MC Automotores | Usados"
    return (
        <div>
            
            <CarList nuevo={false}/>
            
        </div>
    );
};

export default Used;