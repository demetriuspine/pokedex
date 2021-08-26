import './App.css';
import Dashboard from './components/layouts/Dashboard';
import NavBar from './components/layouts/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
    </div>
  );
}

export default App;
