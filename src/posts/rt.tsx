import { React } from 'https://deno.land/x/pagic@v1.5.1/mod.ts';

const Hello = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Hello world</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count +1</button>
    </>
  );
};

export default Hello;
