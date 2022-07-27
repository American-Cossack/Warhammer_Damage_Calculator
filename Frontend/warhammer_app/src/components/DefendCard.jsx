
import React, { useState, useEffect } from "react";
import axios from "axios";



function DefendCard() {
    const [defend, setDefend] = useState([]);
    const intialState = {
      Name: ``,
      T: ``,
      Wounds: ``,
      Save: ``,
      Inv_Save: ``,
      FNP: ``,
    };
  
    const [formState, setFormState] = useState(intialState);


    useEffect(() => {
        const getDefend = async () => {
          try {
            let res = await axios.get("http://localhost:3003/api/defense");
            console.log(res.data.getDefend);
            // setDefend(res.data.getDefend);
          } catch (err) {
            console.log(err);
          }
        };
        getDefend();
      }, []);
    
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            onChange={handleChange}
            value={formState.Name}
          />
          <label htmlFor="T">Toughness:</label>
          <input
            type="number"
            id="T"
            onChange={handleChange}
            value={formState.T}
          />
          <label htmlFor="Wounds">Wounds:</label>
          <input
            type="number"
            id="Wounds"
            onChange={handleChange}
            value={formState.Wounds}
          />
          <label htmlFor="Save">Armor Save:</label>
          <input type="number" id="Save" onChange={handleChange} value={formState.Save} />
          <label htmlFor="Inv_Save">Invulnerable Save:</label>
          <input
            type="number"
            id="Inv_Save"
            onChange={handleChange}
            value={formState.Inv_Save}
          />
          <label htmlFor="FNP">Feel no Pain:</label>
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

