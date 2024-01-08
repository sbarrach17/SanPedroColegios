import  { useState } from "react";
import PudahuelNews from "../components/PudahuelNews";
import ValleGrandeNews from "../components/ValleGrandeNews";
import PolivalenteNews from "../components/PolivalenteNews";
import QuilicuraNews from "../components/QuilicuraNews";

const Noticias = () => {
    const [selectedSchool, setSelectedSchool] = useState("ValleGrande"); // Default selected school

    const renderNewsComponent = () => {
        switch (selectedSchool) {
            case "ValleGrande":
                return <ValleGrandeNews />;
            case "Pudahuel":
                return <PudahuelNews />;
            case "Polivalente":
                return <PolivalenteNews />;
            case "Quilicura":
                return <QuilicuraNews />;
            default:
                return null;
        }
    };

    return (
        <section className="news mt-2">
            <h2 className="text-center fs-1">Noticias</h2>
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
                {renderNewsComponent()}
            </div>
        </section>
    );
};

export default Noticias;
