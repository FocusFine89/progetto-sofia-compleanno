import { Col, Row } from "react-bootstrap";
import sofia2 from "../img/sofia_immagine_compleanno2.jpg";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container-cuori">
      <Row>
        <Col xs={12}>
          <div className=" d-flex justify-content-center mt-5">
            <p className="h1">TANTI AUGURI AMORE MIO!</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className="d-flex justify-content-center">
            <img src={sofia2} alt="" className="sofiaCompleanno d-block" />
          </div>
        </Col>
        <Col xs={12}>
          <div className="d-flex justify-content-center">
            <p className="lettera-auguri fs-3">
              Ciao amore mio, oggi è un giorno speciale ed è impossibile pensare
              che da quando ci siamo conosciuti fino ad oggi tu renda la mia
              vita più bella ogni giorno e mi basta un tuo sorriso per sentirmi
              al settimo cielo. <br />
              Buon compleanno, cuore mio. Ti amo tantissimo, e sono qui, sempre
              per te. <br />
            </p>
          </div>
        </Col>
        <Col xs={12}>
          <div className="d-flex justify-content-center mt-5">
            <button
              onClick={() => setShow(!show)}
              className="bottone-codice border border-0 text-dark fs-4 btn"
            >
              SVELA REGALO
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {show && <p>Codice segreto</p>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
