// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: 'Antonio', sans-serif;
        color: white;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        height: 30px;
        width: 100px;
        margin-left: 2rem;
        border-radius: 0;
        background-color: yellow;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;

        &:hover {
            background-color: red;
        }
    }
`

const Character = ({ dataSet, open }) => {
    return (
        <StyledName>
            <h2>{dataSet.name}</h2>
            <button onClick={() => open(dataSet.name)}>Star Stats</button>
        </StyledName>
    )
}

export default Character;