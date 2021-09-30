import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h4 data-testid="count">{count}</h4>
      <button
        data-testid="minus"
        onClick={() => setCount((prev) => parseInt(prev) - 1)}
      >
        -
      </button>
      <input
        className="input"
        type="number"
        data-testid="input"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button
        data-testid="plus"
        onClick={() => setCount((prev) => parseInt(prev) + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
