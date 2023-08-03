import React, { useState } from 'react'

const App = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <div>
      <h1>Hello, World!</h1>
      <Button onClick={() => setClicked(clicked + 1)}>Clicked: {clicked}</Button>
    </div>
  );
};

export default App;
