import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import CreateSubscription from './pages/CreateSubscription';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-sub" element={<CreateSubscription />} />
      </Routes>
    </Router>
  );
}

export default App;
