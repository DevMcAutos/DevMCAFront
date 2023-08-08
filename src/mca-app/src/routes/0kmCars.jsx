
import CarList from "../components/car/carList"


function News(){
    return(
        <div>
            <p>NUEVOS</p>
            <CarList nuevo={true}/>
        </div>
    );
};

export default News;