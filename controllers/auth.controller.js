const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { registerErrors, loginErrors } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;


const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};


module.exports.register = async (req, res) => {
  const {firstName, lastName, email, password} = req.body

  try {
    const user = await UserModel.create({firstName, lastName, email, password });
    res.status(201).json({ user: user.email});
  }
  catch(err) {
    // console.log(err);
    const errors = registerErrors(err);
    res.status(200).send({ errors })
  }
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge});
    res.status(200).json({ user: user._id});
  } catch (err) {
    const errors = loginErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

