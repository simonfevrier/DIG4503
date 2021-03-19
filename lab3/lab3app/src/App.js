import React from 'react';
import HomePage from './components/homepage/homepage'


function App() {
  const fname = 'Simon';
  return (
    <HomePage firstname={fname} />
  )
}


export default App;
