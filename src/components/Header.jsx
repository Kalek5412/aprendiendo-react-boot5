import React from 'react'
import logo from '../images/logo192.png'

export const Header = () => {
  return (
       <>
        <nav className="navbar navbar-expand-lg   bg-primary   text-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    
                    <img src={logo} height={100} alt="No Encontrada" />

                </a>

                <h1>Sitio Web Con React</h1>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    {/*             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <h4><NavLink to="/" className="nav-link   text-center   text-white"   href="#">Home</NavLink></h4>
                        <h4><NavLink to="/doctores" className="nav-link   text-center   text-white"   href="#">Doctores</NavLink></h4>
                        <h4><NavLink to="/mensajes" className="nav-link   text-center   text-white"   href="#">Mensajes</NavLink></h4>
                        <h4><NavLink to="/acercade" className="nav-link   text-center   text-white"   href="#">Acerca De...</NavLink></h4>
                    </div>
                </div> */}
            </div>
        </nav>

    </>
  )
}


