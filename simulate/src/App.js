import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
