import logo from './logo.svg';
import './App.css';
import RobotCard from './components/RobotCard/RobotCard';
import CardHolder from './components/CardHolder/CardHolder';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardHolder />
    </div>
  );
}

export default App;
