import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>Count + 1</Button>
    </div>
  );
};

export default App;
