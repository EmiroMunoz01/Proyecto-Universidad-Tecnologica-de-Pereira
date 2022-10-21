const Cacao = require("../models/cacao.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let cacao = new Cacao({
    cacao_id: req.body.cacao_id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    sabor: req.body.sabor,
    origen: req.body.origen,
    peso: req.body.peso,
  });

  cacao.save(function (err) {
    if (err) {
      console.error(err),
        (response.exit = false),
        (response.msg = "Error al guardar el cacao");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cacao se guardo correctamente");
    res.json(response);
  });
};
exports.find = function (req, res) {
  Cacao.find(function (err, cacaos) {
    res.json(cacaos);
  });
};

exports.findOne = function (req, res) {
    Cacao.findOne({ _id: req.params.id }, function (err, cacao) {
    res.json(cacao);
  });
};

exports.update = function (req, res) {
  let cacao = {
    cacao_id: req.body.cacao_id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    sabor: req.body.sabor,
    origen: req.body.origen,
    peso: req.body.peso,
  };

  Cacao.findByIdAndUpdate(req.params.id, { $set: cacao }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el cacao");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cacao se modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
    Cacao.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el cacao");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cacao se elimino correctamente");
    res.json(response);
  });
};
