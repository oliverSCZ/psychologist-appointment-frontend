import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import MyAppointments from './components/MyAppointments';
import PsychologistsList from './components/Psychologists/PsychologistsList';
import PsychologistDetails from './components/Psychologists/PsychologistDetails';
import PsychologistsNew from './components/Psychologists/PsychologistsNew';
import { getPsychologists } from './redux/psychologists/psychologists';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsychologists());
  }, []);

  const psychologistSelector = useSelector(
    (state) => state.psychologistsReducer
  );

  const headerInforSelector = useSelector((state) => state.headerInfoReducer);

  const deletePsychologist = (psychologistId) => {
    const psychologist = {
      id: psychologistId,
    };

    dispatch(deletePsychologist(psychologist));
  };

  const psychologists = psychologistSelector.map((psychologist) => (
    <PsychologistsList
      key={psychologist.id}
      id={psychologist.id}
      name={psychologist.name}
      area_of_specialty={psychologist.area_of_specialty}
      deletePyschologist={() => deletePsychologist(psychologist.id)}
    />
  ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-9">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {headerInforSelector.heading}
            {headerInforSelector.subHeading}
            <Routes>
              <Route path="/" element={psychologists} />
              <Route path="/my-appointments" element={<MyAppointments />} />
              <Route
                path="/psychologist/:id"
                element={<PsychologistDetails />}
              />
              <Route path="/add-psychologists" element={<PsychologistsNew />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
