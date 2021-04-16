import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import {BASE_URL, API_KEY} from './constants/index';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState(null);

  const openDetails = id => {
    setCurrentCharacterId(id);
  }

  const closeDetails = () => {
    setCurrentCharacterId(null);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {setCharacters(res.data); console.log(characters)})
      .catch(err => console.log('WHOA, NELLY!'))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        // characters.map((character) => {
        //   return <Character key={character.name} dataSet={character} />;
        // })
      }
    </div>
  );
}

export default App;
