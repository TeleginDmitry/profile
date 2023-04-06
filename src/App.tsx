import React from 'react';
import styles from './App.module.scss'
import Profile from 'pages/Profile';

function App() {
  return (
    <div className={styles.wrapper}>
      <Profile></Profile>
    </div>
  );
}

export default App;
