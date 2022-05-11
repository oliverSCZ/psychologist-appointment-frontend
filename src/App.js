import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MyAppointments from './components/MyAppointments';

function App() {
  return (
    <div className="min-h-screen grid grid-cols-5 gap-3 bg-white">
      <BrowserRouter>
        <div className="border-r-2">
          <Navigation />
        </div>
        <div className="col-span-4">
          <Routes>
            <Route path="/my-appointments" element={<MyAppointments />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
