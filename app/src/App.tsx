import React from 'react';
import classNames from 'classnames/bind';
import style from './App.module.scss'
import Game from './components/game/Game'
const cx = classNames.bind(style)
function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
