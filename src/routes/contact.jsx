function Contact(){
    document.title = "MC Automotores | Contacto"
    return(
        <div className="contacto-cont">
            <div className="footer-container">
                    <div>
                    <div className="logos-footer">
                        <img src="/img/whatsapp.png" alt="whatsapp-image"/>
                        <p>+54 9 3513 13-4173</p>
                    </div>
                    <div className="logos-footer">
                        <img src="/img/Gmail.png" alt="gmail-image" />
                        <p>tomycardozo07@hotmail.com</p>
                    </div>
                    <div className="logos-footer">
                        <img src="/img/ubicacion.png" alt="ubicacion-image" />
                        <p>RN9, Córdoba</p>
                    </div>
                    </div>
                </div>
            <div className="iframe">
                <h2>DONDE ENCONTRARNOS</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.621941138741!2d-64.11129212353046!3d-31.008917276673365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94326303af8abe51%3A0x162d0a9a245fe180!2sMc%20Automotores!5e0!3m2!1ses-419!2sar!4v1691422074352!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;