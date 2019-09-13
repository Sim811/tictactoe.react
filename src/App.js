import React from 'react';
import Home from "./components/Home";
import Game from "./components/Game";
import {Container} from 'semantic-ui-react';
import {Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </Container>
  </>
);

export default App;
