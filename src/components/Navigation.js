import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Our Psychologists',
    },
    {
      id: 2,
      path: '/book-appointment',
      text: 'Book an appointment',
    },
    {
      id: 3,
      path: '/my-appointments',
      text: 'My Appointments',
    },
    {
      id: 4,
      path: '/add-psychologists',
      text: 'Add Psychologists',
    },
  ];

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">{link.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
