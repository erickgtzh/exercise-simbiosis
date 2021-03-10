import React, { useEffect, useState } from 'react';
import userService from '../../services/User';

function Form() {
  const [first_name, setNameF] = useState(null);
  const [last_name, setNameS] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [password, setPassword] = useState(null);
  const [gender_id, setGender] = useState(null);

  const [error, setError] = useState(null);

  const onClickSave = async () => {
    setError(null);

    if (
      first_name &&
      last_name &&
      birthday &&
      password &&
      gender_id
    ) {
      const datapost = {
        first_name,
        last_name,
        birthday,
        password,
        gender_id,
      };

      const res = await userService.save(datapost);

      if (res.success) {
        alert(res.message);
      } else {
        console.log(res.message);
        setError(res.message);
      }
    } else {
      setError('Please fill out all the form.');
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="first_name">First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            onChange={(event) => setNameF(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            onChange={(event) => setNameS(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            class="form-control"
            placeholder="Birthday"
            onChange={(event) => setBirthday(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="gender_id">Gender</label>
          <select
            class="form-control"
            onChange={(event) => setGender(event.target.value)}
            placeholder="Gender"
          >
            <option disabled selected>
              Select a gender
            </option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
      </div>

      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div class="row">
        <div class="col-md-6 mb-3">
          <button
            onClick={() => onClickSave()}
            class="btn btn-primary btn-block"
            type="submit"
          >
            Save User
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
