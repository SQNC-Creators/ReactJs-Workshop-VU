import { Route, Routes } from 'react-router-dom';
import './App.css';

import EventPage from './Pages/EventPage/EventPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EventPage/>}/>

   {/*  1. Add new route as line number 11.
        2. Add your index as path. 
        3. Import newly created Student component.
        4. Add Student component as element. */}

        {/* Remove this line and add your code here */}

      </Routes>
    </div>
  );
}

export default App;
