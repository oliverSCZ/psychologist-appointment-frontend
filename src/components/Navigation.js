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
    <aside className="min-h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto align-middle">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-lime-500 hover:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3 font-semibold uppercase">
                  {link.text}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
