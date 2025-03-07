import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';

const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
     <ThemeProvider theme={theme}>
        <App />
     </ThemeProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
