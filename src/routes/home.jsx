
function Home(){
    document.title = "MC Automotores | Inicio"

    return(
        <div>
            <div className="carrousel">
                <img src="/img/Header1.jpeg" alt="Header"/>
            </div>
            <div className="descripcion-container">
                <h2>QUIENES SOMOS</h2>
                <p>Somos una empresa familiar ubicada en la entrada de colonia caroya especializados en camionetas y en vehículos diesel. brindamos el servicio para facilitarte el cambio de tu vehiculo u obtener tu primer auto! vendemos 0km usados (autos y camionetas) recibimos tu usado no importa el año! Consultar por disponibilidad y precio de los 0km
Nos manejamos con todas las formas de pago</p>
            </div>
            <div className="ubicacion-container">
                <h2>COMO LLEGAR</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.621941138741!2d-64.11129212353046!3d-31.008917276673365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94326303af8abe51%3A0x162d0a9a245fe180!2sMc%20Automotores!5e0!3m2!1ses-419!2sar!4v1691422074352!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Home;