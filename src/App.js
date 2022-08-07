import './App.css';
import Home from './components/Home';
import Task from './components/Task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<Task />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
