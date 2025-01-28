const mongoose = require("mongoose");

const TranslatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // If you want each name to be unique
  },
  geminiApiKey: {
    type: String,
    required: true,
  },
  githubApiKey: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Translator", TranslatorSchema);