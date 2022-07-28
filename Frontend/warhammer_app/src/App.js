import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AttackCard from "./components/AttackCard";
import DefendCard from "./components/DefendCard";
import SolutionCard from "./components/SolutionCard";

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
  // if (!attacks) {
  //   return <h1>Loading please wait...</h1>;
  // } else {
  return (
    <div className="App">
      <h1>Warhammer Damage Calculator:</h1>
      <AttackCard />
      <DefendCard />
      <div key="Solution">
        <h2>Average Wounds Dealt: {solutions}</h2>
      </div>
      {/* <SolutionCard /> */}
      {/* {attacks.map((attack) => (
        <div key={attack.Name} class="CommentBox">
          <h2>Name: {attack.Name}</h2>
          <h3>Number of Shots: {attack.Shots_Number} </h3>
          <p>Ballistic Skill: {attack.BS}</p>
          <p>Strength: {attack.S}</p>
          <p>Armor Piercing: {attack.AP}</p>
          <p>Damage: {attack.Damage}</p>
        </div>
      ))} */}
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
// }

export default App;
