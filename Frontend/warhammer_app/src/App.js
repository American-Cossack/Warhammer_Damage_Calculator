import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    const getAttacks = async () => {
      try {
        let res = await axios.get("http://localhost:3003/api/object");
        console.log(res.data.getAttacks);
        setAttacks(res.data.getAttacks);
      } catch (err) {
        console.log(err);
      }
    };
    getAttacks();
  }, []);

  if (!attacks) {
    return <h1>Loading please wait...</h1>;
  } else {
    return (
      <div className="App">
        <h1>Issues:</h1>
        {attacks.map((attack) => (
          <div key={attack.Name}>
            <h2>Name: {attack.Name}</h2>
            <h3>Type: {attack.Shots_Number}</h3>
            <p>Ballistic Skill: {attack.BS}</p>
            <p>Strength: {attack.S}</p>
            <p>Armor Piercing: {attack.AP}</p>
            <p>Damage: {attack.damage}</p>
          </div>
        ))}
      </div>
    );
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div class="CommentBox">
  //         <div>
  //           Number of Shots:
  //           <input type="text" />
  //         </div>
  //         <div>
  //           Ballistic Skill/Weapon Skill:
  //           <input type="text" />
  //         </div>
  //         <div>
  //           Armour Piercing:
  //           <input type="text" />
  //         </div>
  //         <div>
  //           Damage:
  //           <input type="text" />
  //         </div>
  //       </div>
  //     </header>
  //   </div>
  // );
}

export default App;
