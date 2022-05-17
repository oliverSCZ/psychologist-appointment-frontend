import React from 'react';
import PropTypes from 'prop-types';
import Psychologist from './Psychologist';

const PsychologistsList = ({ id, name, areaOfSpecialty }) => (
  <Psychologist id={id} name={name} area_of_specialty={areaOfSpecialty} />
);

PsychologistsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  areaOfSpecialty: PropTypes.string.isRequired,
};

export default PsychologistsList;
