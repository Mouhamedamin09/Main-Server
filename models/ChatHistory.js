const chatHistorySchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  userId: { type: String, required: true }, // Added userId
  characterName: { type: String, required: true },
  biography: { type: String, required: true },
  messages: [
    {
      sender: { type: String, enum: ['user', 'character'], required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema);

module.exports = ChatHistory;