const Pudahuel = () => {
  return (
    <section className="schoolDes pt-4">
    <div className="card mb-3 pt-3" style={{ maxWidth: '850px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="./img/emblemaPuda.png" className="img-fluid rounded-start" alt="Emblema Pudahuel" style={{objectFit: 'contain', width: '100%', height: '90%'}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Colegio San Pedro Pudahuel</h1>
            <p className="card-text pt-3">
            El Colegio San Pedro Pudahuel es un colegio que se basa en los valores cristianos de la iglesia católica, es un colegio mixto, creado especialmente para formar personas íntegras con un gran desarrollo en lo intelectual, valórico y social.

Nuestro objetivo es entregar un ambiente e infraestructura adecuados para el íntegro desarrollo de nuestros alumnos, para así formar en conjunto con los padres personas responsables, con valores sólidos y humanos. También es de gran importancia entregar al alumno el nivel profesional adecuado, para que ellos sean capaces de insertarse en la vida laboral.

Nuestro colegio fue diseñado para dar a los alumnos un grato, seguro, y cómodo lugar de estudio.
            </p>
            <ul className="list-unstyled">
              <li><strong>Dirección:</strong> San Pablo 8859, Pudahuel</li>
              <li><strong>Correo:</strong> infopudahuel@colegiosanpedro.cl</li>
              <li><strong>Teléfono:</strong> +56226433315</li>
              <li><strong>Redes Sociales:</strong> <a href="https://www.instagram.com/somoscspp/?hl=es" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </a>
                <a href="https://www.facebook.com/p/Colegio-San-Pedro-Pudahuel-100064718047868/?locale=es_" target="blank">
                <img width="35" height="35" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Pudahuel