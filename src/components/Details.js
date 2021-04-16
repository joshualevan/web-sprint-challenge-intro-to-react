import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Details = ({ characterId, close, dataSet }) => {
  const [details, setDetails] = useState(null);

  return (
    <div>
          <p>
            {dataSet.name}
          </p>
      <button onClick={close}>X</button>
    </div>
  );
}

export default Details;