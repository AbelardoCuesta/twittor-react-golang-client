import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import LogoWhiteTwitter from "../../assets/png/logo-white.png";
import LogoTwitter from "../../assets/png/logo.png";
import "./SignInSingUp.scss";

export default function SignInSingUp() {
  return (
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent></RightComponent>
      </Row>
    </Container>
  );

  function LeftComponent() {
    return (
      <Col className="signin-signup__left" xs={6}>
        <img src={LogoTwitter} alt="Twittor" />
        <div>
          <h2>
            <FontAwesomeIcon icon={faSearch} />
            Sigue lo que te interesa.
          </h2>
          <h2>
            <FontAwesomeIcon icon={faUsers} />
            Entérate de qué está hablando la gente.
          </h2>
          <h2>
            <FontAwesomeIcon icon={faComment} />
            Únete a la conversación.
          </h2>
        </div>
      </Col>
    );
  }

  function RightComponent(props) {
    const { openModal, setShowModal, setRefreshCheckLogin } = props;

    return (
      <Col className="signin-signup__right" xs={6}>
        <div>
          <img src={LogoWhiteTwitter} alt="Twittor" />
          <h2>Mira lo que está pasando en el mundo en este momento</h2>
          <h3>Únete a Twittor hot mimso.</h3>
          <Button variant="primary">Regístrate</Button>
          <Button variant="outline-primary" onClick={() => openModal()}>
            Iniciar sesión
          </Button>
        </div>
      </Col>
    );
  }
}
