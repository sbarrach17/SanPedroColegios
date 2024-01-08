import { BiSolidWatch } from "react-icons/bi";

const PudahuelNews = () => {
    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src="./img/emblemaPuda.png"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">ENTREGA INFORME DE NOTAS</h5>
                    <div className="d-flex">
                        <BiSolidWatch className="text-danger" />
                        <p>20-12-2023</p>
                    </div>
                    <p className="card-text">
                        Miércoles 20 Diciembre de 09:00 a 12:00
                        <br />
                        3° básico a III° medio
                    </p>
                    {/* <button type="btn" className="btn btn-success">Leer Más</button> */}
                </div>
            </div>
        </div>
    );
};

export default PudahuelNews;
