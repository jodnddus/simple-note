import React from 'react';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <List />
        <Note />
      </div>
    </div>
  );
}

export default App;
