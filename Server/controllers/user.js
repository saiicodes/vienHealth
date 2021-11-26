import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find by email
    const oldUser = await UserModal.findOne({ email });

    // user does not exist
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    //  check if password correct
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    // if password is not correct
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    // sign in the user
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // find by email
    const oldUser = await UserModal.findOne({ email });

    // user exists
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // has password for protection
    const hashedPassword = await bcrypt.hash(password, 12);

    // creating a new user
    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name,
    });

    // sign in the user
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
