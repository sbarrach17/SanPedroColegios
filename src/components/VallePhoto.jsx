import { BiSolidWatch } from "react-icons/bi";


const VallePhoto = () => {
  return (
    <div className="col">
    <div className="card">
        <img src="./img/foto1.png" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">CERTAMEN</h5>
            <div className="d-flex">
                <BiSolidWatch className="text-danger" />
                <p>20-12-2023</p>
            </div>
            <p className="card-text">
                Nuestros representantes para el primer certamen interescolar de debates estudiantiles
            </p>
        </div>
    </div>
</div>
  )
}

export default VallePhoto