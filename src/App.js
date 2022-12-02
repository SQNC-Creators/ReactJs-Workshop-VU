import { Route, Routes } from 'react-router-dom';
import './App.css';
import EventPage from './Components/Pages/EventPage/EventPage';
import TempPage from './Components/Pages/TempPage/TempPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EventPage/>} />
        <Route path='/temp' element={<TempPage/>} />
      </Routes>
    </div>
  );
}

export default App;
