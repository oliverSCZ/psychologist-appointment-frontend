import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PsychologistsList = ({ id, name, area_of_specialty: specialty }) => (
  <div className="feature col">
    <Link to={`/psychologist/${id}`}>
      <img
        className="img-fluid"
        src="https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post-1536x1024.jpg"
        alt="Bonnie"
      />
      <h5>{name}</h5>
      <span>{specialty}</span>
    </Link>
  </div>
);

PsychologistsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  area_of_specialty: PropTypes.string.isRequired,
};

export default PsychologistsList;
