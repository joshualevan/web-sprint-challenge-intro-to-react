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

  return (
    <div>
      {
        details.map(character => {
            if(character.name === characterId) {
                return (
                    <p></p>
                )
            } 
        })
      }
      <button onClick={close}>X</button>
    </div>
  );
}

export default Details;