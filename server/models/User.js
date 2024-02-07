const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Cannot be blank."],
    unique: true,
    match: /^[a-zA-Z0-9_-]+$/,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Cannot be blank."],
    unique: true,
    match: [/.+@.+\..+/, 'Must be an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }
  
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
