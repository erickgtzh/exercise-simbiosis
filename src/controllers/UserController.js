const controller = {};
var Users = require('../models/User');

controller.index = (req, res) => {
  // start in index
  const data = {
    message: 'success',
  };
  res.render('user', data);
};

controller.delete = async (req, res) => {
  // delete user by user_id
  try {
    const { id } = req.params;

    const response = await Users.destroy({
      where: { user_id: id }
    })
      .then(function (data) {
        const res = { success: true, data: data, message: "Deleted successfully" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
};

controller.create = async (req, res) => {
  // create new User
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

controller.getUser = async (req, res) => {
  // get user by user_id
  try {
    const user = await Users.findByPk(req.params.id);
    const data = { success: true, user: user };
    res.json(data);
  } catch (error) {
    const data = { success: false, message: error };
    res.json(data);
  }
}

controller.updateUser = async (req, res) => {
  // update User by user_id
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      birthday,
      password,
      gender_id,
    } = req.body;

    const data = await Users.update(
      {
        first_name: first_name,
        last_name: last_name,
        birthday: birthday,
        password: password,
        gender_id: gender_id,
      },
      { where: { user_id: id } })
      .then(function (new_user) {
        const res = {
          success: true,
          data: new_user,
          message: 'User updated successfully',
        };
        return res;
      })
      .catch((error) => {
        const res = { success: false, message: error };
        return res;
      });

    res.json(data);
  } catch (error) {
    const data = { success: false, message: error };
    res.json(data);
  }
}

controller.list = async (req, res) => {
  // find all Users
  try {
    Users.findAll({
      attributes: [
        'user_id',
        'first_name',
        'last_name',
        'birthday',
        'password',
        'gender_id',
      ],
    }).then((Users) => {
      res.status(200).json(Users);
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Error!',
      error: error,
    });
  }
};

module.exports = controller;
