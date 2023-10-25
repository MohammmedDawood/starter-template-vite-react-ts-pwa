import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* display env  */}
      <div className='card'>
        <p>Env: {import.meta.env.MODE}</p>
        <p>VITE_APP_TITLE: {import.meta.env.VITE_APP_TITLE}</p>
        <p>VITE_APP_VERSION: {import.meta.env.VITE_APP_VERSION}</p>
        <p>REACT_APP_ENV: {process.env.REACT_APP_ENV}</p>
        <p>REACT_APP_BACKEND_BASE_URL: {process.env.REACT_APP_BACKEND_BASE_URL}</p>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
