import Home from "./Home";
import About from "./About";
import Todo from "./components/Todo/Todo.jsx";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todo" exact component={Home} />

        <Route path="/about" exact component={About} />
        <Redirect path="/" />
      </Switch>
    </Router>
  );
}

export default App;
