const baseUrl = 'http://localhost:3000/api/user';
import axios from 'axios';
const user = {};

user.save = async (data) => {
  const urlSave = baseUrl + '/create';
  const res = await axios
    .post(urlSave, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

user.update = async (data) => {
  const urlSave = baseUrl + `/update/${data.userId}`;
  const res = await axios
    .put(urlSave, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export default user;
