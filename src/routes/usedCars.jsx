import CarList from "../components/car/carList"

function Used(){
    return (
        <div>
            <p>USADOS</p>
            <CarList nuevo={false}/>
        </div>
    );
};

export default Used;