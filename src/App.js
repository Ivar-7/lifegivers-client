import './App.css';
import Footer from './components/orandilanding/Footer';
import Landing from './components/orandilanding/Landing';
import Navbar from './components/orandilanding/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing />
      <hr class="horizontal-line"/>

      <Footer />
    </div>
  );
}

export default App;
