import { BiSolidWatch } from "react-icons/bi";

const PudahuelPhoto = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="./img/fotoPudahuel.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Recreación</h5>
                    <div className="d-flex">
                        <BiSolidWatch className="text-danger" />
                        <p>22-12-2023</p>
                    </div>
                    <p className="card-text">
                        Recreo <br />
                        San Pedro Pudahuel
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PudahuelPhoto;
