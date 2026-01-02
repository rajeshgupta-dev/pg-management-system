const bcrypt = require("bcrypt");
const adminModel = require("../models/admin_model")



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

module.exports = { register }