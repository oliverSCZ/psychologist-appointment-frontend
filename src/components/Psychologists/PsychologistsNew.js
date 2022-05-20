import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePsychologistToApi } from '../../redux/psychologists/psychologists';

const PsychologistsNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [areaOfSpecialty, setAreaOfSpecialty] = useState('');

  const dispatch = useDispatch();

  const addNewPsychologist = () => {
    const newPsychologist = {
      name,
      email,
      gender,
      image,
      area_of_specialty: areaOfSpecialty,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    // dispatch(addBook(newBook));
    dispatch(savePsychologistToApi(newPsychologist));
  };

  return (
    <div className="card-body">
      <form>
        <div className="row">
          <p className="add-book-title">Please complete the fields below:</p>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select name="gender" onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="textarea"
              placeholder="Area of specialty"
              name="areaOfSpecialty"
              value={areaOfSpecialty}
              onChange={(e) => setAreaOfSpecialty(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Image Url"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary btn-update-progress"
              onClick={addNewPsychologist}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PsychologistsNew;
