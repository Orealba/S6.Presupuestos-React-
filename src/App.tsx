import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Calculator } from './Pages/Calculator';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="presupuestos"
        element={<Calculator />}
      />
    </Routes>
  );
}

export default App;
