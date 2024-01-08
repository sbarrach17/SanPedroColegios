import { BiSolidWatch } from "react-icons/bi";

const QuilicuraPhoto = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="./img/fotoQuilicura.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Alumnos Destacados</h5>
                    <div className="d-flex">
                        <BiSolidWatch className="text-danger" />
                        <p>20-12-2023</p>
                    </div>
                    <p className="card-text">
                        Nuestros Alumnos Destacados <br />  
                        año 2023, Excelencia Académica
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuilicuraPhoto;
