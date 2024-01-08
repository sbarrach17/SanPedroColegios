import { NavLink } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";


const Sidebar = () => {
  return (
    <div className="side">
                        
                            <NavLink to="/valle" activeClassName="active">
                                <TbPointFilled  className="icon text-white" />San Pedro Valle Grande
                            </NavLink>
                        
                        
                            <NavLink to="/pudahuel" activeClassName="active">
                                <TbPointFilled  className="icon text-white" />San Pedro Pudahuel
                            </NavLink>
                        
                        
                            <NavLink to="/polivalente" activeClassName="active">
                                <TbPointFilled  className="icon text-white" />San Pedro Polivalente
                            </NavLink>
                        
                        
                            <NavLink to="/quilicura" activeClassName="active">
                                <TbPointFilled  className="icon text-white" />San Pedro Quilicura
                            </NavLink>
                        
                    </div>
  )
}

export default Sidebar