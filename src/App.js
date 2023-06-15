import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SignInSingUp from "./page/SignInSingUp";
export default function App() {
  const [user, setUser] = useState({ name: "Abelardo" });
  return (
    <div>
      {user ? (
        <div>
          <SignInSingUp />
        </div>
      ) : (
        <h1>No estas logeado</h1>
      )}
    </div>
  );
}
