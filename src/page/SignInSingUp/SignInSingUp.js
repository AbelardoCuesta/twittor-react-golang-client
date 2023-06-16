import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import LogoWhiteTwitter from "../../assets/png/logo-white.png";
import LogoTwitter from "../../assets/png/logo.png";
import "./SignInSingUp.scss";

export default function SignInSingUp(props) {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const { show, setShow, children } = props;

  const openModal = (content) => {
    setContentModal(content);
    setShowModal(true);
  };

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
          ></RightComponent>
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        <div>
          <h2> Modal Content</h2>
        </div>
      </BasicModal>
    </>
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
          <h3>Únete a Twittor hoy mimso.</h3>
          <Button
            onClick={() => openModal(<h2>Formulario de registro</h2>)}
            variant="outline-primary"
          >
            Regístrate
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => openModal(<h2>Formulario de Login</h2>)}
          >
            Iniciar sesión
          </Button>
        </div>
      </Col>
    );
  }
}
