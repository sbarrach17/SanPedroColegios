const Quilicura = () => {
  return (
    <section className="schoolDes pt-4">
    <div className="card mb-3 pt-3" style={{ maxWidth: '850px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="./img/emblemaQuili.png" className="img-fluid rounded-start" alt="Emblema Quilicura" style={{objectFit: 'contain', width: '100%', height: '90%'}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Colegio San Pedro Quilicura</h1>
            <p className="card-text pt-3">
              El Colegio San Pedro es un colegio de formación católica mixto, cuyo objetivo es lograr que los alumnos se desarrollen como personas íntegras en su ser espiritual, social y académico, basándose en tres conceptos fundamentales educación, formación y respeto.

              Nuestro Colegio San Pedro de Quilicura fue fundado el año 2001 y cuenta a la fecha con:

              Patios y básico diferenciado para kinder, básica y media. 53 salas de clases distribuidas en tres edificios de tres pisos.

              Recursos audiovisuales, amplia y completa biblioteca interactiva, 2 laboratorios de computación, Laboratorio de ciencias, multitaller, gimnasio, 3 multicanchas. Casino, Enfermería y Auditorio.
            </p>
            <ul className="list-unstyled">
              <li><strong>Dirección:</strong> Avenida Lo Marcoleta 165, Quilicura</li>
              <li><strong>Correo:</strong> secredireccion@colegiosanpedro.cl</li>
              <li><strong>Teléfono:</strong> +56 22 607 0412</li>
              <li><strong>Redes Sociales:</strong> <a href="https://www.instagram.com/sanpedroquilicuraoficial/" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/sanpedroquilicuraoficial?mibextid=nwBsNb" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Quilicura;
