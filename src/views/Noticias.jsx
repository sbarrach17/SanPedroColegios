import { BiSolidWatch } from "react-icons/bi";

const Noticias = () => {
    return (
        <section className="news">
            <h2 className="text-center fs-1">Noticias Destacadas</h2>

            <div className="row row-cols-1 row-cols-md-4 g-3 pt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ENTREGA INFORME DE NOTAS</h5>
                            <div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>20-12-2023</p>
                            </div>
                            <p className="card-text">
                                Miércoles 20 Diciembre de 09:00 a 12:00<br/>3° básico a III° medio
                            </p>
                            {/* <button type="btn" className="btn btn-success">Leer Más</button> */}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">VACANTES DISPONIBLES 2024</h5>
                            <div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>15-12-2023</p>
                            </div>
                            <p className="card-text"> <br/> Pre Kínder | Kínder <br/> Horario de atención: lunes a viernes de 9:00 a 13:00</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PRUEBAS</h5>
                            <div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>11-10-2023</p>
                            </div>
                            <p className="card-text">
                                Temario pruebas finales<br/>IV° medio
                            </p><br/><br/>
                            <a href="./path-to-your-file.pdf" download="filename.pdf" className="btn btn-success">
                Ver Más
            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">REUNIÓN DE APODERADOS</h5>
                            <div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>06-10-2023</p>
                            </div>
                            <p className="card-text">
                                Cuarta reunión de apoderados del año 2023<br/>Horario de 17:00 a 18:00
                            </p>
                            <a href="./path-to-your-file.pdf" download="filename.pdf" className="btn btn-success">
                Ver Más
            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">COORDINACIÓN ACADÉMICA</h5><div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>06-10-2023</p>
                            </div>
                            <p className="card-text">
                              Modificaciones  área académica
                            </p>
                            <a href="./path-to-your-file.pdf" download="filename.pdf" className="btn btn-success">
                Ver Más
            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./img/aviso.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">FIESTA COSTUMBRISTA</h5>
                            <div className="d-flex">
                            <BiSolidWatch className="text-danger"  /><p>07-09-2023</p>
                            </div>
                            <p className="card-text">
                            Cronograma correspondiente al día 15, septiembre
                            </p>
                            <a href="./path-to-your-file.pdf" download="filename.pdf" className="btn btn-success">
                Ver Más
            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Noticias;
