import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import MyAppointments from './components/MyAppointments';
import PsychologistsList from './components/Psychologists/PsychologistsList';
import PsychologistDetails from './components/Psychologists/PsychologistDetails';
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
      specialty={psychologist.area_of_specialty}
      deletePyschologist={() => deletePsychologist(psychologist.id)}
    />
  ));

  return (
    <div className="min-h-screen grid grid-cols-5 gap-3 bg-white">
      <div className="border-r-2">
        <Navigation />
      </div>
      <div className="col-span-4">
        <div className="py-12 mt-5 w-75 bg-white border rounded drop-shadow-lg mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl tracking-widest">
                {headerInforSelector.heading}
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {headerInforSelector.subHeading}
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <Routes>
                  <Route path="/" element={psychologists} />
                  <Route path="/my-appointments" element={<MyAppointments />} />
                  <Route
                    path="/psychologist/:id"
                    element={<PsychologistDetails />}
                  />
                </Routes>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
