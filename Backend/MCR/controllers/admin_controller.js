const bcrypt = require("bcrypt");
const adminModel = require("../models/admin_model")
const jwt = require("jsonwebtoken")



const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      })
    }

    const isAdminAvailable = await adminModel.findOne({ email });
    if (isAdminAvailable) {
      return res.status(409).json({
        message: "This Email alreday Exists",
        success: false
      })
    }

    const admin = new adminModel({
      name,
      email,
    });
    admin.password = await bcrypt.hash(password, 10);
    await admin.save();

    res.status(201).json({
      message: "Admin account created successfully",
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
    console.log(name, email, password);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    })
  }

};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(409).json({
        message: "This User does not Exists",
        success: false
      })
    }

    const isMatch = await bcrypt.compare(password, user.password,);
    if (!isMatch) {
      return res.status(401).json({
        message: "Password is wrong",
        success: false
      })
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d"
      })

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: `Welocome back ${user.name}`,
      success: true
    })

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message
    })
  }
}

module.exports = { register, login }