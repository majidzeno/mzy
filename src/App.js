import InfoSection from  './components/InfoSection/InfoSection.jsx';
import Header from  './components/Header/Header.jsx';
import Gallery from  './components/Gallery/Gallery.jsx';
import Navbar from  './components/Navbar/Navbar.jsx';
import Todo from  './components/Todo/Todo.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <InfoSection />
      <Navbar />
      <Gallery />
      <Todo />
    </div>
  );
}

export default App;
