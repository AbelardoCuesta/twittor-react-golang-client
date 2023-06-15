import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
      <Col className="signin-signup_left" xs={6}>
        <img src={LogoTwitter} alt="Twitter"></img>
        <div>
          <h2>Sigue lo que te interesa.</h2>
          <h2>Entérate de qué está hablando la gente.</h2>
          <h2>Únete a la conversación.</h2>
        </div>
      </Col>
    );
  }
}

function RightComponent() {
  return (
    <Col className="signin-signup_right" xs={6}>
      <h2>RightComponent...</h2>
    </Col>
  );
}
