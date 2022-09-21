const controller = require("../controllers/users.controller");

module.exports = [
  {
    path: "/",
    method: "GET",
    router: controller.getUsers,
  },
  {
    path: "/:id",
    method: "GET",
    router: controller.getUser,
  },
  {
    path: "/",
    method: "POST",
    router: controller.addUser,
  },
  {
    path: "/:id",
    method: "PUT",
    router: controller.editUser,
  },
  {
    path: "/:id",
    method: "DELETE",
    router: controller.removeUser,
  },
];
