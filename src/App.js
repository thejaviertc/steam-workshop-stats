// Dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// React
import React from 'react';

// Other
import './App.css';

// Components
import Header from "./components/Header";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics />
    </div >
  );
}

export default App;
