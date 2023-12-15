import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";

import User from "./schema/User.js";

const app = express();
const PORT = 3000;

// regex for email and password validations
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/;

// middle ware
app.use(express.json());

mongoose.connect(process.env.DATABASE, {
  autoIndex: true,
});

const formatDataToSend = (user) => {
  const accessToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_ACCESS_KEY
  );

  return {
    accessToken,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname,
  };
};

const generateUserName = async (email) => {
  let username = email.split("@")[0];
  // as@gmail => [as, gmail]

  let isUserNameNotUnique = await User.exists({
    "personal_info.username": username,
  }).then((result) => result);

  isUserNameNotUnique ? (username += nanoid()) : "";

  return username;
};
app.post("/signup", async (req, res) => {
  let { fullname, email, password } = req.body;

  // validating data from FRONTEND
  if (fullname.length < 3) {
    return res
      .status(403)
      .json({ error: "fullname must have least 3 letters " });
  }

  if (!email.length) {
    return res.status(403).json({ error: "enter a email" });
  }

  if (!emailRegex.test(email)) {
    return res.status(403).json({ error: "email is invalid " });
  }

  if (!passwordRegex.test(password)) {
    return res.status(403).json({
      error:
        "password should be in 6 to 18 characters and must have numeric, 1 lowercase, 1 uppercase and 1 special character ",
    });
  }

  try {
    let hashed_password = await bcrypt.hash(password, 10);
    let username = await generateUserName(email);

    let user = User({
      personal_info: { fullname, email, password: hashed_password, username },
    });

    user
      .save()
      .then((u) => {
        return res.status(200).json(formatDataToSend(u));
      })
      .catch((error) => {
        if (error.code === 11000) {
          return res.status(500).json({ error: "email already exists" });
        }
        return res.status(500).json({ error: error.message });
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post("/signin", (req, res) => {
  let { email, password } = req.body;

  User.findOne({ "personal_info.email": email })
    .then((user) => {
      if (!user) {
        return res.status(403).json({ error: "email not found" });
      }

      console.log("user:", user);

      bcrypt.compare(password, user.personal_info.password, (err, result) => {
        if (err) {
          return res
            .status(403)
            .json({ err: "error occurred while login please try again" });
        }

        if (!result) {
          return res.status(403).json({ err: "incorrect password" });
        } else {
          return res.status(200).json(formatDataToSend(user));
        }
      });
    })
    .catch((error) => {
      // console.log("error:", error);
      return res.status(500).json({ error: error.message });
    });
});

app.listen(PORT, () => {
  console.log("PORT:", PORT);
});
