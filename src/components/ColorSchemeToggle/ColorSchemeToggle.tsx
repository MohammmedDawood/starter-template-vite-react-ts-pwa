import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { selectLayout, toggleTheme } from '@/store/layout';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';

export function ColorSchemeToggle() {
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectLayout);

  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme(layout.theme);
    console.log('layout.theme', layout.theme);
  }, [layout.theme, setColorScheme]);

  return (
    <Group justify='center' mt='xl'>
      <Button
        onClick={() => {
          dispatch(toggleTheme('light'));
        }}
      >
        Light
      </Button>
      <Button
        onClick={() => {
          dispatch(toggleTheme('dark'));
        }}
      >
        Dark
      </Button>
      <Button
        onClick={() => {
          dispatch(toggleTheme('auto'));
        }}
      >
        Auto
      </Button>
    </Group>
  );
}
