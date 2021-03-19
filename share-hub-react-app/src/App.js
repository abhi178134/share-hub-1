import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing all the components here
import NavBar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
