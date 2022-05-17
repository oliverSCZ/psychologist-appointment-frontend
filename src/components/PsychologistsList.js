import React from 'react';
import Psychologist from './Psychologist';

const PsychologistsList = () => (
  <div className="py-12 mt-5 w-75 bg-white border rounded drop-shadow-lg mx-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl tracking-widest">
          OUR PSYCHOLOGISTS
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Ready to get you the help you need.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <Psychologist />
        </dl>
      </div>
    </div>
  </div>
);

export default PsychologistsList;
