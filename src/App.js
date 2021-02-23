import logo from "./logo.svg";
import "./App.css";
import Tescik from "./malytest";
import React, { useState } from "react";
import Icon from "./someIcon.png";

function App() {
  const [value, setValue] = useState("First Name");
  const [LastName, setLastName] = useState("Last Name");
  const [Email, setEmail] = useState("E-mail");

  function declareFirstName(event) {
    setValue(event.target.value);
  }

  function declareLastName(event) {
    setLastName(event.target.value);
  }
  function declareEmail(event) {
    setEmail(event.target.value);
  }
  return (
    <div className="MainContainer">
      <img className="Icon" src={Icon} alt="Icon" />
      <div className="Data">
        <div className="FirstName">
          <label>First Name</label>
          <input
            className="InputData"
            type="text"
            onChange={declareFirstName}
          />
          <span className="Outputdata">{value}</span>
        </div>
        <div className="LastName">
          <label>Last Name</label>
          <input className="InputData" type="text" onChange={declareLastName} />
          <span className="Outputdata">{LastName}</span>
        </div>
        <div className="Email">
          <label>Email</label>
          <input className="InputData" type="text" onChange={declareEmail} />
          <span className="Outputdata">{Email}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
