import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AttackCard from "./components/AttackCard";
import DefendCard from "./components/DefendCard";

function App() {
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    const getSolutions = async () => {
      try {
        let res = await axios.get("http://localhost:3003/api/solution");
        console.log(res.data);
        setSolutions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSolutions();
  }, []);
  console.log(solutions);

  return (
    <div className="App">
      <h1>Warhammer Damage Calculator:</h1>
      <AttackCard />
      <DefendCard />

      <div key="Solution">
        <h2>Average Wounds Dealt: {solutions}</h2>
      </div>
    </div>
  );
}

export default App;
