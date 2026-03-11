const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

let users = [
  {
    email: "abc@abc.ca",
    firstName: "ABC",
    id: "5abf6783"
  },
  {
    email: "xyz@xyz.ca",
    firstName: "XYZ",
    id: "5abf674563"
  }
];

app.get('/users', (req, res) => {
  try {
    res.status(200).json({
      message: "Users retrieved",
      success: true,
      users: users
    });
  } 
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
});

app.get('/user/:id', (req, res) => {
  try {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    res.status(200).json({
      success: true,
      user: user
    });
  } 
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
});

app.post('/add', (req, res) => {
  try {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({
        message: "Email and firstName required",
        success: false
      });
    }

    const newUser = {
      email,
      firstName,
      id: uuidv4()
    };

    users.push(newUser);

    res.status(201).json({
      message: "User added",
      success: true
    });
  } 
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
});

app.put('/update/:id', (req, res) => {
  try {
    const { email, firstName } = req.body;
    const userIndex = users.findIndex(u => u.id === req.params.id);

    if (userIndex === -1) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    if (!email && !firstName) {
      return res.status(400).json({
        message: "At least one of email or firstName required",
        success: false
      });
    }

    if (email) users[userIndex].email = email;
    if (firstName) users[userIndex].firstName = firstName;

    res.status(200).json({
      message: "User updated",
      success: true
    });
  } 
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
});

module.exports = app;