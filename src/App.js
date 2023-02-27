import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
