import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('მრიცხველი ჩაიტვირთა');
  }, []);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increase}>გაზრდა</button>

      <button onClick={decrease}>შემცირება</button>

      <button onClick={reset}>განულება</button>
    </div>
  );
}

