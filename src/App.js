import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';


function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route exact path='/' element={<Page1 />} />
                <Route exact path='/chat' element={<Page2 />} />
                <Route exact path='/rslt' element={<Page3 />} />
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
