import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DefendCard from "./components/DefendCard";

function App() {
  const [attacks, setAttacks] = useState([]);
  const intialState = {
    Name: ``,
    Shots_Number: ``,
    BS: ``,
    S: ``,
    AP: ``,
    Damage: ``,
  };

  const [formState, setFormState] = useState(intialState);

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

  // useEffect(() => {
  //   const getDefend = async () => {
  //     try {
  //       let res = await axios.get("http://localhost:3003/api/defense");
  //       console.log(res.data.getDefend);
  //       // setDefend(res.data.getDefend);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getDefend();
  // }, []);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  // Event Handler: a callback function to
  // be run when the event is observed
  const handleSubmit = (event) => {
    // we always need to stop the browser
    // from submitting the form or the page
    // will be refreshed.
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(intialState);
  };

  // Event Listener: tells the browser
  // which event to listen for on which
  // element and what to do when the event
  // happens

  //...
  return (
    <p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          onChange={handleChange}
          value={formState.Name}
        />
        <label htmlFor="Shots_Number">Number of Shots:</label>
        <input
          type="number"
          id="Shots_Number"
          onChange={handleChange}
          value={formState.Shots_Number}
        />
        <label htmlFor="BS">Ballistic Skill:</label>
        <input
          type="number"
          id="BS"
          onChange={handleChange}
          value={formState.BS}
        />
        <label htmlFor="AP">Strength:</label>
        <input
          type="number"
          id="S"
          onChange={handleChange}
          value={formState.S}
        />
        <label htmlFor="message">Armor Piercing:</label>
        <input
          type="number"
          id="AP"
          onChange={handleChange}
          value={formState.AP}
        />
        <label htmlFor="Damage">Damage</label>
        <input
          type="number"
          id="Damage"
          onChange={handleChange}
          value={formState.Damage}
        />
        <button type="submit">Send</button>
      </form>
      <DefendCard />
    </p>
  );

  //...

  // if (!attacks) {
  //   return <h1>Loading please wait...</h1>;
  // } else {
  //   return (
  //     <div className="App">
  //       <h1>Attacks:</h1>
  //       {attacks.map((attack) => (
  //         <div key={attack.Name} class="CommentBox">
  //           <h2>Name: {attack.Name}</h2>
  //           <h3>Number of Shots: {attack.Shots_Number} </h3>
  //           <p>Ballistic Skill: {attack.BS}</p>
  //           <p>Strength: {attack.S}</p>
  //           <p>Armor Piercing: {attack.AP}</p>
  //           <p>Damage: {attack.Damage}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
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
