import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBar />} />
      </Routes>
    </Router>
  );
}
