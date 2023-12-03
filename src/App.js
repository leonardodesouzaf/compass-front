import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Homepage from './pages/homepage';
import About from './pages/about';
import Help from './pages/help';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </>
  );
}
