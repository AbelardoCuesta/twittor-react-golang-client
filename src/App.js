import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function App() {
  const { user, setUser } = useState({ name: "Abelardo" });
  //return <div>{user ? <h1>Estas logeado</h1> : <h1>No estas logeado</h1>}</div>;
  return (
    <div>
      <button>Click</button>
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}
