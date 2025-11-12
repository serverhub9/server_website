
import './App.css';
import Home from './pages/home';
import SuccessPage from './components/success';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
function App() {
  return (
    <>
<Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/website' element={<Home/>}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/success" element={<SuccessPage />} /> {/* The SuccessPage route */}
        <Route path="/terms" element={<Terms />} /> {/* The SuccessPage route */}
        <Route path="/privacy" element={<Privacy />} /> {/* The SuccessPage route */}
      
      </Routes>
    </Router>
  </>
  );
}

export default App;
