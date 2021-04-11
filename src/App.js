import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import {
  Container,
  darkTheme,
  GlobalStyles,
  lightTheme,
} from './styles/globals';
import useTheme from './utils/useTheme';
import useWindowSize from './utils/useWindowSize';

const App = () => {
  const currentTheme = () => {
    const localTheme = localStorage.getItem('theme');
    // set default theme to dark
    return localTheme || 'dark';
  };

  const [theme, toggleTheme] = useTheme(currentTheme);
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  const width = useWindowSize();

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles width={width} />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Form />
        <List />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
