import React from 'react';
import Home from './Home';
import HomeChild from './HomeChild';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>🍽️ Anuj da Dhaba</h1>
      {/* Main Home Component */}
      <Home />

      {/* Optional Summary Component */}
      <HomeChild />
    </div>
  );
};

export default App;
