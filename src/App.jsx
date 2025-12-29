import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillingPage from './pages/BillingPage';
import ComponentShowcase from './pages/ComponentShowcase';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<BillingPage />} />
        <Route path='/showcomponent' element={<ComponentShowcase />} />
      </Routes>
    </Router>

  )

}

export default App
