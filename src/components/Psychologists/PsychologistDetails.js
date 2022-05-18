import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPsychologists } from '../../redux/psychologists/psychologists';

const PsychologistDetails = () => {
  const { id } = useParams();

  let psychologistSelector = useSelector((state) => state.psychologistsReducer);

  if (psychologistSelector.length === 0) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPsychologists());
    }, []);

    psychologistSelector = useSelector((state) => state.psychologistsReducer);
  }
  const psychologist = psychologistSelector.find(
    (psychologist) => psychologist.id === parseInt(id, 10),
  );

  return (
    <div className="grid-cols-3 gap-4 flex items-center">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3"
          src="https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post-1536x1024.jpg"
          alt="Bonnie"
        />
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {' '}
          {psychologist.name}
        </h5>
        <span className="text-center text-sm text-gray-500 dark:text-gray-400">
          {psychologist.specialty}
        </span>
      </div>
    </div>
  );
};

export default PsychologistDetails;
