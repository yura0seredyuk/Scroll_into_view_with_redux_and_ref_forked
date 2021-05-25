import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Posts from "./Posts";
import Post from "./Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id/" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
