import React from 'react';
import PropTypes from 'prop-types';
import Psychologist from './Psychologist';

const PsychologistsList = ({ id, name, specialty }) => (
  <Psychologist id={id} name={name} specialty={specialty} />
);

PsychologistsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
};

export default PsychologistsList;
