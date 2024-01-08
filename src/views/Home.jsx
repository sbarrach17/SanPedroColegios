/* eslint-disable react/no-unescaped-entities */

import Inicio from "./Inicio";

const Home = () => {
    return (
        <>
                <div className="home-container"  >
                    <img
                        className="home-background img-fluid"
                        src="./img/Logox4.jpeg"
                        alt="Foto Portada"
                    />
                    <div className="textHome">
                        <h1 className="homeText text-white text-center">¡Educando mentes, formando el futuro!</h1>
                    <p className=" homeText text-center text-white">
                        "Forjando futuros brillantes, hoy y siempre."
                    </p>
                    </div>
                </div>
            <section className="btnContainer">
                <Inicio />
            </section>
        </>
    );
};

export default Home;
