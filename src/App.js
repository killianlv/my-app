import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ message: '' });

  useEffect(() => {
    axios.get('http://localhost:4000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;