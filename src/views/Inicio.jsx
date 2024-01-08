const Inicio = () => {
    return (
        <div className="btn-group dropup-center dropup">
            <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle text-white fw-medium"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Convivencia Escolar
            </button>
            <ul className="dropdown-menu">
                <a
                    className="dropdown-item"
                    href="./doc/ReglamentoVG.pdf"
                    download="Reglamento Valle Grande.pdf"
                >
                    Valle Grande
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/convivenciaPudahuel.pdf"
                    download="Reglamento Pudahuel.pdf"
                >
                    Pudahuel
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/convivenciaPolivalente.pdf"
                    download="Reglamento Polivalente.pdf"
                >
                    Polivalente
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/convivenciaQuilicura.pdf"
                    download="Reglamento Quilicura.pdf"
                >
                    Quilicura
                </a>
            </ul>
            <button
                type="button"
                className="btn btn-outline-warning dropdown-toggle text-white fw-medium"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Útiles escolares 2024
            </button>
            <ul className="dropdown-menu">
                <a
                    className="dropdown-item"
                    href="./doc/ReglamentoVG.pdf"
                    download="ReglamentoVG.pdf"
                >
                    Valle Grande
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/Reglamento.pdf"
                    download="Reglamento.pdf"
                >
                    Pudahuel
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/Reglamento.pdf"
                    download="Reglamento.pdf"
                >
                    Polivalente
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/Reglamento.pdf"
                    download="Reglamento.pdf"
                >
                    Quilicura
                </a>
            </ul>
            <button
                type="button"
                className="btn btn-outline-danger dropdown-toggle text-white fw-medium"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Rice 2024
            </button>
            <ul className="dropdown-menu">
                <a
                    className="dropdown-item"
                    href="./doc/riceVG.pdf"
                    download="Rice Valle Grande.pdf"
                >
                    Valle Grande
                </a>
                <a
                    className="dropdown-item"
                    href="./doc/ricePudahuel.pdf"
                    download="Rice Pudahuel.pdf"
                >
                    Pudahuel
                </a>
                <a className="dropdown-item" href="" download="">
                    Polivalente
                </a>
                <a className="dropdown-item" href="" download="">
                    Quilicura
                </a>
            </ul>
            <button type="button" className="btn btn-outline-success ">
                <a className="fw-medium" href="./doc/Becas.pdf" download="Becas.pdf">
                    Becas 2024
                </a>
            </button>
        </div>
    );
};

export default Inicio;
