function Footer(){
    return(
        <div className="footer">
            <img src="/img/triangulos-division.png" alt="" className="divisor"/>
            <footer>
                <img src="/img/logo.png"  className="logo-footer" alt="" />
                <div className="footer-container">
                    
                    <div>
                        <strong><p>Dirección</p></strong>
                        <p>RN 9 KM 749, Córdoba</p>
                    </div>
                    <div>
                    <strong><p>Horarios de atención</p></strong>
                        <p>Lunes a viernes de 9 a 20hs</p>
                    </div>
                    <div>
                    <strong><p>Teléfono</p></strong>
                        <p>+54 9 3513 13-4173</p>
                    </div>
                    <div>
                    <strong><p>Email</p></strong>
                        <p>tomycardozo07@hotmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;