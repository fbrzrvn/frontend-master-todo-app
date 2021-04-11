import { useState } from 'react';

const useTheme = currentTheme => {
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');

    localStorage.setItem('theme', theme);
  };
  return [theme, toggleTheme];
};

export default useTheme;
