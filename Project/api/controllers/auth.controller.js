const UserModel = require("../modules/User.model.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  try {
    const { fname, lname, age, tel, email, position, username, password } =
      req.body;

    if (
      !fname ||
      !lname ||
      !age ||
      !tel ||
      !email ||
      !position ||
      !username ||
      !password
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashpassword = bcrypt.hashSync(password, 10);

    const newUser = new UserModel({
      fname,
      lname,
      age,
      tel,
      email,
      position,
      username,
      password: hashpassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
