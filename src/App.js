import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import data from './helper/data'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main data = {data} />
    </div>
  );
}

export default App;
