import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AttackCard from "./components/AttackCard";
import DefendCard from "./components/DefendCard";
import { BASE_URL } from "./global";

function App() {
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    const getSolutions = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/api/solution`);
        console.log(res.data);
        setSolutions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSolutions();
  }, []);
  console.log(solutions);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="items-grid">
        <h1>Warhammer Damage Calculator:</h1>
        <AttackCard />
        <DefendCard />

        <div key="Solution">
          <h2>Average Wounds Dealt:</h2>
          <h3 className="slt">{solutions}</h3>
          <button onClick={refreshPage}>Submit Results</button>
        </div>
        <h4>Knowledge is power. Guard it well.</h4>
      </div>
    </div>
  );
}

export default App;
