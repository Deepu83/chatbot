const Faq = require('../models/Faq');
const stringSimilarity = require('string-similarity');

exports.getAnswer = async (req, res) => {
  const userQuestion = req.body.question?.toLowerCase();
  if (!userQuestion) return res.status(400).json({ answer: "Question is required" });

  try {
    const faqs = await Faq.find({});
    const questions = faqs.map(faq => faq.question.toLowerCase());
    const answers = faqs.map(faq => faq.answer);

    const bestMatch = stringSimilarity.findBestMatch(userQuestion, questions).bestMatch;

    const answer = bestMatch.rating > 0.4
      ? answers[questions.indexOf(bestMatch.target)]
      : "🤖 Sorry, I don’t know that yet. Please contact support.";

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "Server error" });
  }
};

exports.addFaq = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFaq = new Faq({ question, answer });
    await newFaq.save();
    res.status(201).json({ message: 'FAQ added successfully', faq: newFaq });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving FAQ' });
  }
};
