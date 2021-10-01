import InfoSection from "./components/InfoSection/InfoSection.jsx";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Todo from "./components/Todo/Todo.jsx";

import "./App.css";

import { Route } from "react-router-dom";


function Home({ match }) {
  const components = {
    'gallery': Gallery,
    'todo': Todo
  };
  function getComponent({name, match}) {
    const DynamicComponent = components[name]; 
    return <DynamicComponent match={match} />;
  }
  return (
    <div className="app">
      <div className="container">
        <Header />
        <InfoSection />
        <Navbar />
          <Route 
            path={`${match.path}/:name`} 
            render = {({match}) =>( 
              <div> 
                {getComponent({name:match.params.name, match})} 
              </div>
            )} 
          />
      </div>
    </div>
  );
}

export default Home;
