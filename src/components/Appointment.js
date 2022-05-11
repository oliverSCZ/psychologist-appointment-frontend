import React from 'react';

const Appointment = () => (
  <div className="relative">
    <dt>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        MC
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
        Martha Chambula
      </p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">
      January 12th, 2022 at 03:00 PM
    </dd>
  </div>
);

export default Appointment;
