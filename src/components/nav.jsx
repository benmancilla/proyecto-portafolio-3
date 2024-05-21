import React, { useState, useEffect } from 'react';
import CreateForm from './form.jsx'
import logo from '../assets/img/logo.svg'


const CreateNavBar = () => {
    const [mode, setMode] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5 && window.scrollY < 650) {
                setMode('nav-all nav-shadow');
            } else if (window.scrollY >= 650) {
                setMode('nav-active-color');
            } else {
                setMode('nav-all');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg fixed-top ${mode}`} id="nav-all">
                <div className="container-fluid" id="container-navbar">
                    <a className="navbar-brand" href="#"><img src={logo} width="35px" alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-list">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#more-bg1">Obras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" href="#ContactToggle" id="btn-contact">Contacto</a>
                            </li>
                        </ul>
                            <div className="modal fade" id="ContactToggle" aria-hidden="true" aria-labelledby="ModalToggleLabel" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="ModalToggleLabel">Contacto</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <CreateForm/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>    
        </React.Fragment>
    );
};

export default CreateNavBar;
