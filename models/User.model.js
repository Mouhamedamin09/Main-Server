const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  isVerified: { type: Boolean, default: false },    // For email verification
  verificationCode: { type: String },
  avatar: {
    type: String
  },
  country: {
    type: String
  },
  birthDate: {
    type: Date
  },
  resetPasswordCode: { type: String },       // Password reset code
  resetPasswordExpires: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now
  },
  coins: {
    type: Number,
    default: 50 // Default coins value
  },
  watchedEpisodes: [
    {
      animeId: {
        type: String,
        required: true
      },
      episodes: {
        type: [Number],
        default: []
      }
    }
  ],
  // NEW: Field to track if the user has shared the app
  hasSharedApp: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
