import "../assets/Css/Contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <div className="container">
            <div className="mapas">
                <div className="boxContact">
                    <img
                        className="mapImg"
                        src="./img/emblemaVG.png"
                        alt="Ubicación Colegio Valle Grande"
                    />
                    <address className="">
                        <div className="redes">
                    <a href="https://www.instagram.com/colegio_sanpedro_vg/" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/p/Colegio-San-Pedro-Valle-Grande-100031873854523/" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a>
                </div>
                        <p className="add">
                            <IoLogoWhatsapp className="icon text-success" />{" "}
                            +56988277914
                        </p>
                        <p>
                            <MdLocationOn className="location text-danger" />
                            Av. Gral. San Martin Norte. 0245, Lampa
                        </p>
                    </address>
                </div>
                <div className="mapImgContainer">
                    <img
                        className="mapImg"
                        src="./img/emblemaPuda.png"
                        alt="Ubicación Colegio Valle Grande"
                    />
                    <address className="">
                    <a href="https://www.instagram.com/somoscspp/?hl=es" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/p/Colegio-San-Pedro-Pudahuel-100064718047868/?locale=es_" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a>
                        <p className="add">
                            <IoLogoWhatsapp className="icon text-success" />
                            +56226433315
                        </p>
                        <p>
                            <MdLocationOn className="location text-danger" />
                            San Pablo 8859, Pudahuel
                        </p>
                    </address>
                </div>
                <div className="mapImgContainer">
                    <img
                        className="mapImg"
                        src="./img/emblemaPoli.png"
                        alt="Ubicación Colegio Valle Grande"
                    />
                    <address className="">
                    <a href="https://www.instagram.com/polivalentespoficial/?hl=es" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/polivalente2017/?locale=es_LA" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a>
                        <p className="add">
                            <IoLogoWhatsapp className="icon text-success" />
                            +56965958362
                        </p>
                        <p>
                            <MdLocationOn className="location text-danger" />
                            Calle Miriam 105/Avenida Lo Marcoleta , Quilicura
                        </p>
                    </address>
                </div>
                <div className="mapImgContainer">
                    <img
                        className="mapImg"
                        src="./img/emblemaQuili.png"
                        alt="Ubicación Colegio Valle Grande"
                    />
                    <address className="">
                    <a href="https://www.instagram.com/sanpedroquilicuraoficial/" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/sanpedroquilicuraoficial?mibextid=nwBsNb" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a>
                        <p className="add">
                            <IoLogoWhatsapp className="icon text-success" />
                            +56226070412
                        </p>
                        <p>
                            <MdLocationOn className="location text-danger" />
                            Avenida Lo Marcoleta 165, Quilicura
                        </p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default Contact;
