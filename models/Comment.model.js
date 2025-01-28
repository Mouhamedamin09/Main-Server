// models/Comment.js

const mongoose = require('mongoose');

const replySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    replyText: {
      type: String,
      required: true,
      maxlength: 150, // Enforce character limit
    },
    spoiler: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true }
);

const commentSchema = new mongoose.Schema(
  {
    animeId: {
      type: String, // Changed from ObjectId to String
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    commentText: {
      type: String,
      required: true,
      maxlength: 500, // Example limit
    },
    spoiler: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
      },
    ],
    replies: [replySchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
