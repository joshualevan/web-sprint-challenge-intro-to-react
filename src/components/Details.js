import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 80%;
  padding-top: 1rem;

  h2 {
    font-family: 'Antonio', sans-serif;
    font-weight: 700;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    color: gray;
  }

  span {
    color: black;
  }
  @media(max-width:600px){
    width: 100%;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    color: white;
    height: 50px;
    width: 100px;
    margin: 20px 0;
    border-radius: 0;
    background-color: rgb(9, 21, 37);
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    transition: all .75s ease-out;

    &:hover {
        background-color: black;
        height: 20px;
        width: 180px;
        margin: 35px 0 35px 0;
        transition: all .25s ease-in;
    }

  
`

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

  const toPounds = kg => Math.round(kg * 2.20462);

  return (
    <>
      {
        details.map(character => {
            const {name, mass, birth_year, height, gender} = character;

            if(name === characterId) {
                return (
                    <StyledDetails>
                        <h2 key = {name}>{name}</h2>
                        <p key = {gender}>Gender: <span>{gender}</span></p>
                        <p key = {height}>Height: <span>{height} cm ({toFeet(height)})</span></p>
                        <p key = {mass}>Mass: <span>{mass} kg ({toPounds(mass)} lbs)</span></p>
                        <p key = {birth_year}>Birth Year: <span>{parseInt(birth_year)} years Before the Battle of Yavin</span></p>
                        <button onClick={close}>close</button>
                    </StyledDetails> 
                )
            } 
        })
      }
    </>
  );
}

export default Details;