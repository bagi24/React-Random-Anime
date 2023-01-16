import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShhow';

function getRendomAnimal() {
  const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRendomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}> Add animal</button>
      <div className='animal-list'> {renderedAnimals}</div>
    </div>
  );
}

export default App;
