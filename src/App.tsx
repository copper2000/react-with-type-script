import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Mark Wahlberg",
      age: 50,
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfHHuIClzQ63LOJd9EYYFAKrWaaACddQ0EWToXiIeeyvFmNZ03",
      note: "No pain, No gain!"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
