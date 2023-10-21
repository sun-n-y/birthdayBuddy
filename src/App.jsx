import { useState } from 'react';
import data from './data';
import List from './components/List';
import Person from './components/Person';

const App = () => {
  const [people, setPeople] = useState(data);
  const numBirthdays = people.length;
  const handleClick = () => {
    setPeople([]);
  };
  return (
    <main>
      <div className="container">
        <h3>{numBirthdays} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={handleClick}>
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
