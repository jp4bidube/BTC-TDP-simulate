import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import GlobalStyle from './styles/global';
import Header from './components/Header';
function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes />
      </Router>
    </MuiPickersUtilsProvider>
  );
}

export default App;
