import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';
import theme from "./theme";
import { ThemeProvider } from "styled-components";

const rootElement = document.getElementById('root');
ReactDOM.render(
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>, rootElement
);


