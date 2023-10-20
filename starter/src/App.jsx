import { useState } from 'react';
import data from './data';

const App = () => {
  const [person, setPerson] = useState(data);
  const numBirthdays = person.length;
  const handleClick = () => {
    setPerson([]);
  };
  return (
    <main>
      <div className="container">
        <h3>{numBirthdays} birthdays today</h3>
        {person.map((item) => {
          const { id, name, age, image } = item;
          return (
            <div className="person" key={id}>
              <img src={image} alt="" />
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          );
        })}
        <button className="btn" onClick={handleClick}>
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
