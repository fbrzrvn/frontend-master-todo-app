import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import EmptyList from './components/EmptyList';
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
  const width = useWindowSize();
  const todos = useSelector(state => state.todos);

  const currentTheme = () => {
    const localTheme = localStorage.getItem('TODO_THEME');
    return localTheme || 'dark'; // set default theme to dark
  };

  const [theme, toggleTheme] = useTheme(currentTheme);
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles width={width} />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Form />
        {todos.length === 0 ? (
          <EmptyList />
        ) : (
          <>
            <List />
            <Footer />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
