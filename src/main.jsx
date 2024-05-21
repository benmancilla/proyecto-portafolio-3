import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Background from './components/bg';
import CreateNavBar from './components/nav';
import CreateSlider from './components/slider';
import CreateCardGroup from './components/cards';
import LiveCount from './components/posts';
import icon from './assets/img/icon.svg';
import reicon from './assets/img/react-icon.svg';
import boicon from './assets/img/bootstrap-icon.svg';
import './index.css';
import './assets/css/nav.css';
import './assets/css/more.css';

const App = () => (
  <React.Fragment>
    <section className={`bg-all ${Background()}`}>
      <CreateNavBar />
      <section className="presentation" id="presentation">
        <div className="info">
          <div className="info-text">
            <h1>Presentación</h1>
            <p>
              Soy un artista digital apasionado por diversos movimientos artísticos, que a menudo inspiran mis dibujos. Además, la música es una gran influencia en mi trabajo, por lo que suelo acompañar mis publicaciones con canciones que complementan mis creaciones.
            </p>
          </div>
          <a type="button" className="btn btn-outline-info" id="trabajos-btn" href="#more-bg1">Más</a>
        </div>
        <CreateSlider />
      </section>

      <section className="more" id={`more-${Background()}`}>
        <div className={`info-all info-more-${Background()}`}>
          <div className="info-text-more">
            <h1><LiveCount /> ilustraciones hasta el momento</h1>
            <p>
              Actualmente llevo más de 100 ilustraciones, algunas mejores que otras. Aquí algunas de mis favoritas:
            </p>
          </div>
        </div>
        <CreateCardGroup />
        <div className="info-all" id='final'>
          <div className="info-text-more final">
            <h1>Además</h1>
            <p>
              Me interesa el desarrollo web, por eso fui yo quien desarrolló esta pequeña landing page utilizando React y Bootstrap.
            </p>
            <div className='final-images'></div>
            <a className="icon" href="https://es.react.dev/"><img src={reicon} width="120px" height="140px" alt="Logo" /></a>
            <a className="icon" href="https://getbootstrap.com/"><img src={boicon} width="120px" height="140px" alt="Logo" /></a>
          </div>
        </div>
      </section>
    </section>

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Leallicna</p>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/leallicna/"><img src={icon} width="25px" id="footer-img" /></a></li>
        </ul>
      </footer>
    </div>
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);




