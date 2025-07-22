const mongoose = require('mongoose');

// Define the schema
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  }
});

// ✅ Export the model safely (avoids OverwriteModelError in watch mode or re-runs)
const Faq = mongoose.models.Faq || mongoose.model('Faq', faqSchema);
module.exports = Faq;
