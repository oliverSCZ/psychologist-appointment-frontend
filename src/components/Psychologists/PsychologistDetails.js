import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PsychologistDetails = () => {
  const { id } = useParams();

  const psychologist = useSelector((state) => {
    const { psychologists } = state.psychologistsReducer;
    return psychologists.find((psychologist) => psychologist.id === id);
  });

  return (
    <div className="grid-cols-3 gap-4 flex items-center">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-2">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post-1536x1024.jpg"
            alt="Bonnie"
          />
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            FFFF
          </h5>
          <span className="text-center text-sm text-gray-500 dark:text-gray-400">
            sss
          </span>
        </div>
      </div>
    </div>
  );
};

export default PsychologistDetails;
