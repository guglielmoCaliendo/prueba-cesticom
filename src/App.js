import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import SharedLayout from './components/SharedLayout';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path='2' element={<Exercise2 />} />
          <Route path='3' element={<Exercise3 />} />
          <Route path='4' element={<Exercise4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
