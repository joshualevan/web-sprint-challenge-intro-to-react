// Write your Character component here
import React from 'react';

const Character = ({ dataSet, open }) => {
    return (
        <div>
            {dataSet.name}
            <button onClick={() => open(dataSet.name)}>Star Stats</button>
        </div>
    )
}

export default Character;