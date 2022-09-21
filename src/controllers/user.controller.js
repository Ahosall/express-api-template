const model = require("../models/user.model");

module.exports = {
  getUsers: (req, res) => {
    const users = model;
    res.json({ users });
  },

  getUser: (req, res) => {
    const { id } = req.params;
    const users = model;

    var user;
    user = users.filter((usr) => usr.id == id)[0];

    if (user == undefined) user = "No user found!";

    res.json({ user });
  },

  addUser: (req, res) => {
    const { title, description } = req.body;

    if (!title && !description)
      return res.json({ message: "Invalid data", status: 400 });

    const users = model;
    const ultId = users[users.length - 1] ? users[users.length - 1].id : 1;

    const nUser = {
      id: ultId + 1,
      title,
      description,
      finished: false,
      user: 1,
      createdAt: Date.now(),
    };

    model.push(nUser);

    res.json({ status: 200, user: nUser });
  },

  editUser: (req, res) => {
    const { id } = req.params;

    const users = model;
    const usrIndex = users.findIndex((usr) => usr.id == id);

    const eUser = { ...users[usrIndex], ...req.body };

    model.splice(usrIndex, usrIndex == 0 ? 1 : usrIndex, eUser);
    res.json({ status: 200, user: eUser });
  },

  removeUser: (req, res) => {
    const { id } = req.params;

    const users = model;
    const usrIndex = users.findIndex((usr) => usr.id == id);

    model.splice(usrIndex, 1);
    res.json({ status: 200, user: users[usrIndex] });
  },
};
