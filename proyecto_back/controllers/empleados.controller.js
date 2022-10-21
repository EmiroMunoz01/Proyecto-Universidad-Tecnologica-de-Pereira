const Empleado = require("../models/empleados.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let empleado = new Empleado({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    email: req.body.email,
    direccion: req.body.direccion,
  });

  empleado.save(function (err) {
    if (err) {
      console.error(err),
        (response.exit = false),
        (response.msg = "Error al guardar el empledo");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El empleado se guardo correctamente");
    res.json(response);
  });
};
exports.find = function (req, res) {
  Empleado.find(function (err, empleados) {
    res.json(empleados);
  });
};
