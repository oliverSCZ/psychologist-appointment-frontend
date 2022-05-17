import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navigation from './components/Navigation';
import MyAppointments from './components/MyAppointments';
import PsychologistsList from './components/PsychologistsList';

function App() {
  return (
    <div className="min-h-screen grid grid-cols-5 gap-3 bg-white">
      <Provider store={store}>
        <BrowserRouter>
          <div className="border-r-2">
            <Navigation />
          </div>
          <div className="col-span-4">
            <Routes>
              <Route path="/" element={<PsychologistsList />} />
              <Route path="/my-appointments" element={<MyAppointments />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
