import logo from "./logo.svg";
import "./App.css";
import AllPages from "./pages";
import React from "react";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="App">
        <AllPages />
      </div>
    </Container>
  );
}

export default App;
