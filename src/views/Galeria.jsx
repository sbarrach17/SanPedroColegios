// import { BiSolidWatch } from "react-icons/bi";
import  { useState } from "react";
import VallePhoto from "../components/VallePhoto";
import PudahuelPhoto from "../components/PudahuelPhoto";
import PolivalentePhoto from "../components/PolivalentePhoto";
import QuilicuraPhoto from "../components/QuilicuraPhoto";

const Galeria = () => {
    const [selectedSchool, setSelectedSchool] = useState("ValleGrande"); 

    const renderPhotoComponent = () => {
        switch (selectedSchool) {
            case "ValleGrande":
                return <VallePhoto />;
            case "Pudahuel":
                return <PudahuelPhoto />;
            case "Polivalente":
                return <PolivalentePhoto />;
            case "Quilicura":
                return <QuilicuraPhoto />;
            default:
                return null;
        }
    };
    return (
        <section className="news mt-2">
        <h3 className="text-center fs-1">Fotos Destacadas</h3>
        <div className="btnGroup">
        <div className="btnNews text-center">
            <button type="button" className=" btn btn-primary " onClick={() => setSelectedSchool("ValleGrande")}>Valle Grande</button>
            <button type="button" className=" btn btn-success " onClick={() => setSelectedSchool("Pudahuel")}>Pudahuel</button>
            <button type="button" className=" btn btn-danger " onClick={() => setSelectedSchool("Polivalente")}>Polivalente</button>
            <button type="button" className=" btn btn-warning text-white" onClick={() => setSelectedSchool("Quilicura")}>Quilicura</button>
        </div>
        </div>
        <h3 className="text-center fs-3 mt-4">Colegio San Pedro {selectedSchool}</h3>
        <div className="row row-cols-1 row-cols-md-4 g-3 pt-3">
            {renderPhotoComponent()}
        </div>
    </section>
    );
};

export default Galeria;
