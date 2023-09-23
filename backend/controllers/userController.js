const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const expressAsyncHandler = require("express-async-handler");
const NodeRSA = require("node-rsa");
const crypto = require("crypto");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(403);
    throw new Error("User already exists");
  }

  const key = new NodeRSA({ b: 2048 }); 

  // Extract private and public keys as strings
  const privateKey = key.exportKey("private");
  const publicKey = key.exportKey("public");


  const user = await User.create({
    username,
    email,
    password,
    privateKey,
    publicKey,
  });

  console.log(user);
  if (user) res.send("User created succesfully");
  else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if(!user){
    res.status(404);
    throw new Error("Email is not associated with any account")
  }

  if (await user.matchPassword(password)) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(401)
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };
