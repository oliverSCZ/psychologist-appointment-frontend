import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PsychologistsNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [areaOfSpecialty, setareaOfSpecialty] = useState('');

  const dispatch = useDispatch();

  const addPsychologist = () => {
    const newPsychologist = {
      name,
      email,
      gender,
      image,
      areaOfSpecialty,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    // dispatch(addBook(newBook));
    dispatch(postBook(newBook));
  };
};

export default PsychologistsNew;
