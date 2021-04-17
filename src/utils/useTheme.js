import { useEffect, useState } from 'react';

const useTheme = currentTheme => {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem('TODO_THEME', theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return [theme, toggleTheme];
};

export default useTheme;
