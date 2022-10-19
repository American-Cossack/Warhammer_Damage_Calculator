
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../global";


function DefendCard() {
    const [ ,setDefend] = useState([]);
    const intialState = {
      Name: ``,
      T: ``,
      Wounds: ``,
      Save: ``,
      Inv_Save: ``,
      FNP: ``,
    };
  
    const [formState, setFormState] = useState(intialState);
 const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

    useEffect(() => {
        const getDefend = async () => {
          try {
            let res = await axios.get(`${BASE_URL}/api/defense`, formState);
            setDefend(res.data.getDefend);
          } catch (err) {
            console.log(err);
          }
        };
        getDefend();
      }, );
    
     
    
      const handleSubmit = async (event) => {

        event.preventDefault();
        await axios.post(`${BASE_URL}/api/defense`, formState)

        console.log(formState);

        setFormState(intialState);
      };
    

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name"> Name: </label>
          <input
            type="text"
            placeholder="Space Marine"
            id="Name"
            onChange={handleChange}
            value={formState.Name}
          />
          <label htmlFor="T"> Toughness: </label>
          <input
            type="number"
            id="T"
            placeholder="4"
            onChange={handleChange}
            value={formState.T}
          />
          <label htmlFor="Wounds"> Wounds: </label>
          <input
            type="number"
            id="Wounds"
            placeholder="2"
            onChange={handleChange}
            value={formState.Wounds}
          />
          <label htmlFor="Save"> Armor Save: </label>
          <input type="number" placeholder="3"
          id="Save" onChange={handleChange} value={formState.Save} />
          <label htmlFor="Inv_Save"> Invulnerable Save: </label>
          <input
            type="number"
            id="Inv_Save"
            onChange={handleChange}
            value={formState.Inv_Save}
          />
          <label htmlFor="FNP"> Feel no Pain: </label>
          <input
            type="number"
            id="FNP"
            onChange={handleChange}
            value={formState.FNP}
          />
          <button type="submit">Send</button>
        </form>
    
    

    
      );


}

export default DefendCard

