import { Link } from "react-router-dom"

function Contact(){
    document.title = "MC Automotores | Contacto"
    return(
        <div className="contacto-cont">
            <div className="contact-container">
                    <div>
                    <div className="logos-contact">
                    <Link to="https://wa.me/5493513134173" target="_blank"><img src="/img/whatsapp-negro.png" alt="whatsapp-image"/></Link>
                        <Link to="https://wa.me/5493513134173" target="_blank"><p>+54 9 3513 13-4173</p></Link>
                    </div>
                    <div className="logos-contact">
                        <img src="/img/Gmail-negro.png" alt="gmail-image" />
                        <p>tomycardozo07@hotmail.com</p>
                    </div>
                    <div className="logos-contact">
                        <img src="/img/ubicacion-negro.png" alt="ubicacion-image" />
                        <p>RN9 KM 749, Córdoba</p>
                    </div>
                    <div className="instagram">
                        <p>Seguinos en instagram para enterarte de las novedades: </p>
                        <div className="logo-instagram">
                            <Link to="https://www.instagram.com/_mc_automotores/" target="_blank"><img src="/img/instagram-negro.png" alt="logo instagram" /></Link>
                            <Link to="https://www.instagram.com/_mc_automotores/" target="_blank"><p>@_mc_automotores</p></Link>
                        </div>
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