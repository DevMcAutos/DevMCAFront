import Item from "./carItem"
function CarTable({items}){
    return(
        <div className="car-container">
            {items && items.map(cars=>{
                return(
                    <Item cars={cars} key={cars._id}></Item>
                )
            })}
        </div>
    );
};

export default CarTable