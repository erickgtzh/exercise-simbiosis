const controller = {};
// import model
var Users = require('../models/User');

controller.testApi = async (req, res) => {
  //   const data = {
  //     success: true,
  //     message: 'success',
  //   };
  //   res.json(data);

  const response = await Users.findAll()
    .then(function (data) {
      const res = { success: true, data: data };
      return res;
    })
    .catch((error) => {
      const res = { success: false, error: error };
      return res;
    });

  res.json(response);
};

controller.index = (req, res) => {
  const data = {
    message: 'success',
  };
  res.render('user', data);
};

controller.create = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birthday,
      password,
      gender_id,
    } = req.body;

    const data = await Users.create({
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
      password: password,
      gender_id: gender_id,
    })
      .then(function (data) {
        const res = {
          success: true,
          data: data,
          message: 'User saved successfully',
        };
        return res;
      })
      .catch((error) => {
        const res = { success: false, message: error };
        return res;
      });

    res.json(data);
  } catch (e) {
    const data = { success: false, message: error };
    res.json(data);
  }
};

module.exports = controller;
