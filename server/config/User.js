const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true
  },

  displayName: String,

  photoURL: String,

  provider: {
    type: String,
    enum: ['password', 'google', 'apple']
  }

}, { timestamps: true });

module.exports =
  mongoose.model('User', userSchema);
