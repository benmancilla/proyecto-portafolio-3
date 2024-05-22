import React, { useState, useEffect } from 'react';
import skull from '../assets/img/skull.jpg'
import journey from '../assets/img/journey.jpg'
import texture from '../assets/img/texture.jpg'
import battle from '../assets/img/battle.jpg'
import ghost from '../assets/img/ghost.jpg'
import bunny from '../assets/img/bunny.jpg'
import mummy from '../assets/img/mummy.jpg'
import remix1 from '../assets/img/remix.jpg'
import hermit from '../assets/img/hermit.jpg'


const CreateCard = ({img,name,alt,url1}) => {
    return (  
        <div className="col">
            <div className="card">
            <div style={{ backgroundImage: `url(${img})` }} className="card-img-top" id="card-paint" alt={alt} onClick={() => window.location.href = url1}></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
}

const CreateCardGroup = () => {
    const [mode, setMode] = useState();

    useEffect(() => {
        const handleWidth = () => {
            if (window.innerWidth <= 426) {
                setMode(<div id="card-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000" data-touch="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={skull} name="The skull sued me" alt="skull" url1={'https://www.instagram.com/p/C5Hdmufv7bZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={remix1} name="remix" alt="remix" url1={'https://www.instagram.com/p/C4Lk-crrTxk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={ghost} name="ghost rider" alt="ghost" url1={'https://www.instagram.com/p/C6fPBprsT8f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={bunny} name="eyeless bunny" alt="bunny" url1={'https://www.instagram.com/p/C33KQfVPrKL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={journey} name="long journey" alt="journey" url1={'https://www.instagram.com/p/C6SKHBQs-vB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={hermit} name="battle against hermitman" alt="hermit" url1={'https://www.instagram.com/p/C6rqCdQPMO9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={texture} name="texture dimension" alt="texture" url1={'https://www.instagram.com/p/C7NG-0wv_s4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={battle} name="battle" alt="battle" url1={'https://www.instagram.com/p/C5t6tYavq7j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={mummy} name="mummies" alt="mummy" url1={'https://www.instagram.com/p/C7Ka3mWv4o_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        );
            } else {
                setMode(<div id="card-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={skull} name="The skull sued me" alt="skull" url1={'https://www.instagram.com/p/C5Hdmufv7bZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={remix1} name="remix" alt="remix" url1={'https://www.instagram.com/p/C4Lk-crrTxk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={ghost} name="ghost rider" alt="ghost" url1={'https://www.instagram.com/p/C6fPBprsT8f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={journey} name="long journey" alt="journey" url1={'https://www.instagram.com/p/C6SKHBQs-vB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={hermit} name="battle against hermitman" alt="hermit" url1={'https://www.instagram.com/p/C6rqCdQPMO9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={texture} name="texture dimension" alt="texture" url1={'https://www.instagram.com/p/C7NG-0wv_s4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                                        <CreateCard img={battle} name="battle" alt="battle" url1={'https://www.instagram.com/p/C5t6tYavq7j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={bunny} name="eyeless bunny" alt="bunny" url1={'https://www.instagram.com/p/C33KQfVPrKL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                        <CreateCard img={mummy} name="mummies" alt="mummy" url1={'https://www.instagram.com/p/C7Ka3mWv4o_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}/>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        );
            }
        };

        handleWidth();
        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);

    return (mode)
}

export default CreateCardGroup;
