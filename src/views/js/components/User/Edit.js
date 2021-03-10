import React, { useEffect, useState } from 'react';
const baseUrl = 'http://localhost:3000/api/user';
import axios from 'axios';
import userService from '../../services/User';

function Edit(props) {
    let userId = props.match.params.user_id;

    const [first_name, setNameF] = useState(null);
    const [last_name, setNameS] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [password, setPassword] = useState(null);
    const [gender_id, setGender] = useState(null);

    const [error, setError] = useState(null);

    const onClickUpdate = async () => {
        setError(null);

        if (
            first_name &&
            last_name &&
            birthday &&
            password &&
            gender_id
        ) {
            const datapost = {
                userId,
                first_name,
                last_name,
                birthday,
                password,
                gender_id,
            };

            const res = await userService.update(datapost);

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


    const getUserInfo = async () => {
        await axios.get(baseUrl + `/${userId}`).then(res => {
            setNameF(res.data.user.first_name);
            setNameS(res.data.user.last_name);
            setBirthday(res.data.user.birthday);
            setPassword(res.data.user.password);
            setGender(res.data.user.gender_id);
        });
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    function checkGender(gender) {
        return gender === 1 ? 'Male' : 'Female';
    }

    return (
        <>
            <h4>Edit user {userId} </h4>
            <hr />
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        value={first_name}
                        onChange={(event) => setNameF(event.target.value)}
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                        defaultValue={last_name}
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
                        defaultValue={birthday}
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
                        defaultValue={password}
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
                            {checkGender(gender_id)}
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
                    <button class="btn btn-primary btn-block" onClick={() => onClickUpdate()} type="submit">Update User</button>
                </div>
            </div>
        </>
    )
}

export default Edit;
