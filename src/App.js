import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title = "Textutils"/>
    <div className="container">
    <Textform heading = "Enter your text"/>
    </div>
    </>
  );
}

export default App;
