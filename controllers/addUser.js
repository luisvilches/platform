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