const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, pass } = req.body;
  try {
    if (!email || !pass) {
      return res.status(400).send({ errors: [{ msg: "Please provide an email and password." }] });
    }

    const found = await user.findOne({ email });
    if (found) {
      return res.status(400).send({ errors: [{ msg: "User already exists with this email address." }] });
    }

    if (pass.length < 8) {
      return res.status(400).send({ errors: [{ msg: "Password must be at least 8 characters long." }] });
    }

    const users = new user(req.body);

    // hash password
    const salt = 10;
    const hashpass = bcrypt.hashSync(pass, salt);
    users.pass = hashpass;

    // token
    const key = { id: users._id };
    const token = jwt.sign(key, "hello");
    await users.save();

    res.status(200).send({ msg: "Registration successful.", users, token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errors: [{ msg: "Unable to create user account at this time. Please try again later." }] });
  }
};

exports.Login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    if (!email || !pass) {
      return res.status(400).send({ errors: [{ msg: "Please provide an email and password." }] });
    }

    const users = await user.findOne({ email });
    if (!users) {
      return res.status(400).send({ errors: [{ msg: "Email not found. Please try again." }] });
    }

    const match = await bcrypt.compare(pass, users.pass);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Incorrect password. Please try again." }] });
    }

    const key = { id: users._id };
    const token = jwt.sign(key, "hello");

    res.status(200).send({ msg: "Login successful.", users, token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errors: [{ msg: "Unable to log in at this time. Please try again later." }] });
  }
};
