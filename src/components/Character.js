// Write your Character component here
import React from 'react';

const Character = ({ dataSet }) => {
    return (
        <div>
            {dataSet.name}
        </div>
    )
}

export default Character;