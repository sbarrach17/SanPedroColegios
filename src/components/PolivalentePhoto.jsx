import { BiSolidWatch } from "react-icons/bi";

const PolivalentePhoto = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="./img/fotoPolivalente.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Premio</h5>
                    <div className="d-flex">
                        <BiSolidWatch className="text-danger" />
                        <p>20-12-2023</p>
                    </div>
                    <p className="card-text">
                        Alumna ganadora al premio <br />
                        Espíritu San Pedro
                    </p>
                </div>
            </div>
        </div>
    );
};
export default PolivalentePhoto