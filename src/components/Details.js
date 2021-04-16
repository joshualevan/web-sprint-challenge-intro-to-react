import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';

const Details = ({ characterId, close }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => setDetails(res.data))
      .catch(err => console.log('WHOA, NELLY!'))
  }, [characterId])

  const toFeet = cm => {
      const inches = cm * .393701;
      const feet = Math.floor(inches/ 12);
      const remainderIncehes = Math.floor(inches%12);

      return `${feet}' ${remainderIncehes}"`
  }

  return (
    <>
      {
        details.map(character => {
            const {name, mass, birth_year, height, gender} = character;

            if(name === characterId) {
                return (
                    <div>
                        <h1 key = {name}>{name}</h1>
                        <p key = {gender}>Gender: {gender}</p>
                        <p key = {height}>Height: {height} cm {toFeet(height)}</p>
                        <p key = {mass}>Mass: {mass} kg</p>
                        <p key = {birth_year}>Birth Year: {parseInt(birth_year)} years Before the Battle of Yavin</p>
                    </div>
                    
                )
            } 
        })
      }
      <button onClick={close}>X</button>
    </>
  );
}

export default Details;