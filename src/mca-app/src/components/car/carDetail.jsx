import { useNavigate } from 'react-router-dom';

function CarDetail(car){
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => navigate(-1)}>Volver al menú</button>
            <p>Nombre: <strong>{car.name}</strong></p>
            <p>Marca: <strong>{car.brand}</strong></p>
            <p>Modelo: <strong>{car.model}</strong></p>
            <p>Año: <strong>{car.year}</strong></p>
            <p>Motor: <strong>{car.engine}</strong></p>
            <p>Combustible:<strong> {car.fuel}</strong></p>
            <p>Precio: <strong>{car.price}</strong></p>
            <p>Traccion: <strong>{car.traction}</strong></p>
            <p>Version: <strong>{car.version}</strong></p>
            <p>Kilometros: <strong>{car.kms}</strong></p>
            <img src={car.img} alt="imagen del auto" />
        </div>
    );
};

export default CarDetail;
