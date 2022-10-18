

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../global";




function AttackCard() {
    const [ ,setAttacks] = useState([]);
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
          let res = await axios.get(`${BASE_URL}/api/object`);
          // console.log(res.data.getAttacks);
          setAttacks(res.data.getAttacks);
        } catch (err) {
          console.log(err);
        }
      };
      getAttacks();
    }, []);
  

    const handleChange = async (event) => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
  

    const handleSubmit = async (event) => {

      event.preventDefault();
      let res = await axios.post(`${BASE_URL}/api/object`, formState)
      console.log(res.data)

      console.log(formState);

      setFormState(intialState);
      
    };
  

    return (
      <p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name"> Name: </label>
          <input
            placeholder="Bolter"
            type="text"
            id="Name"
            onChange={handleChange}
            value={formState.Name}
          />
          <label htmlFor="Shots_Number"> Number of Shots: </label>
          <input
            type="number"
            placeholder="2"
            id="Shots_Number"
            onChange={handleChange}
            value={formState.Shots_Number}
          />
          <label htmlFor="BS"> Ballistic Skill: </label>
          <input
            type="number"
            placeholder="3"
            id="BS"
            onChange={handleChange}
            value={formState.BS}
          />
          <label htmlFor="AP"> Strength: </label>
          <input
            type="number"
            placeholder="4"
            id="S"
            onChange={handleChange}
            value={formState.S}
          />
          <label htmlFor="message"> Armor Piercing: </label>
          <input
            type="number"
            placeholder="1"
            id="AP"
            onChange={handleChange}
            value={formState.AP}
          />
          <label htmlFor="Damage"> Damage: </label>
          <input
            type="number"
            placeholder="1"
            id="Damage"
            onChange={handleChange}
            value={formState.Damage}
          />
          <button type="submit">Send</button>
        </form>
      </p>
    );
}

export default AttackCard