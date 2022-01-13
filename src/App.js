import logo from './logo.svg';
import './App.css';
import Meme from './components/meme'
import MemeGenerated from './components/memeGenerated'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div>
          <h1>Meme Creator</h1>
          <Routes>
              <Route exact path='/' element={<Meme /> } />
              <Route exact path='/generated' element={<MemeGenerated />} />

          </Routes>
      </div>
  );
}

export default App;
