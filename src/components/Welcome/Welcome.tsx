import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';

export function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title className={classes.title} ta='center' mt={100}>
        Welcome to{' '}
        <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href='https://mantine.dev/guides/vite/' size='lg'>
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
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
    </>
  );
}
