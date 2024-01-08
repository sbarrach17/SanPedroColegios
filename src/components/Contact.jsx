import "../assets/Css/Contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
// import { MdLocationOn } from "react-icons/md";

const Contact = () => {
    const handleEnviar = () => {
        alert(`Recibimos tu mensaje y ya estamos trabajando en ello`);
    };

    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label fs-5 mt-3 titleContact"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="TuCorreo@ejemplo.com"
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-4">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label fs-5 titleContact"
                        >
                            Déjanos tu comentario
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="btn btn-danger"
                onClick={handleEnviar}
            >
                Enviar
            </button>
            <address className="pt-3">
                <p className="add">
                    <IoLogoWhatsapp className="icon text-success" /> +56988277914 , San Pedro Valle Grande
                </p>                            
            </address>
        </div>
    );
};

export default Contact;
