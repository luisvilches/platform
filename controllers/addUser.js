/**
 * Created by luisvilches on 30-08-17.
 */

const User = require('../models/user');


// crea mediante el metodo post una nueva cuenta de usuario.
exports.addUser = (req,res) => {
  let user =  new User({
      rut: req.body.rut,
      name: req.body.name,
      apellido: req.body.apellido,
      mail: req.body.mail,
      phone: req.body.phone,
      username: req.body.username,
      password: req.body.password,
      apps:[]
  });

  user.save((err,result) => {
      if(err){
          return res.status(500).json({state:"Error",message:err});
      } else {
          return res.status(200).json({state:"Success",message:result});
      }
  });
};

// actualiza una cuenta de usuario
exports.updateUser = (req,res) => {
    let user =  new User({
        _id: req.params.id,
        rut: req.body.rut,
        name: req.body.name,
        apellido: req.body.apellido,
        mail: req.body.mail,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
    });

    User.update({_id: req.params.id},user,(err,result) => {
        if(err){
            res.status(500).json({state:"Error",message:err});
        } else {
            res.status(200).json({state:"Success",message:result});
        }
    });
};


// elimina una cuenta de usuario
exports.deleteUser = (req,res) => {
    User.remove({_id: req.params.id}, (err,result) => {
       if(err){
           return res.status(500).json({state:"Error",message:err});
       } else {
           return res.status(200).json({state:"Success",message:result});
       }
    });
};

// retorna un array con todas las cuentas de usuarios
exports.find = (req,res) => {
    User.find((err,result) => {
        if(err){
            return res.status(500).json({state:"Error",message:err});
        } else {
            return res.status(200).json({state:"Success",message:result});
        }
    });
};


// busca una cuenta de usuario por su id
exports.findId = (req,res) => {
  User.findById({_id: req.params.id}, (err,result) => {
      if(err){
          return res.status(500).json({state:"Error",message:err});
      } else {
          return res.status(200).json({state:"Success",message:result});
      }
    });
};