import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import UsPage from './screens/UsPage';
import ContactPage from './screens/ContactPage';
import './App.css'

export function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/us" element={<UsPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    );
  };

export default App
