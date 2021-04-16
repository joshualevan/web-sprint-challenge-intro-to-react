import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import Details from './components/Details';
import {BASE_URL, API_KEY} from './constants/index';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-family: 'Antonio', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${pr => pr.theme.yellow};
`

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

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {setCharacters(res.data); console.log(characters)})
      .catch(err => console.log('WHOA, NELLY!'+ err))
  }, [characters])

  return (
    <div className="App">
      <StyledHeader>Characters</StyledHeader>
      {
        characters.map((character) => {
          return <Character key={character.name} dataSet={character} open={openDetails}/>;
        })
      }
      {
        currentCharacterId && <Details characterId = {currentCharacterId} close={closeDetails}/>
      }
    </div>
  );
}

export default App;
