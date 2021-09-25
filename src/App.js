import InfoSection from "./components/InfoSection/InfoSection.jsx";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Todo from "./components/Todo/Todo.jsx";

import "./App.css";

import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <InfoSection />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/todo" exact component={Todo} />
            <Redirect path="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
