
import CarList from "../components/car/carList"


function News(){
    document.title = "MC Automotores | 0km"
    return(
        <div>
            <CarList nuevo={true}/>
        </div>
    );
};

export default News;