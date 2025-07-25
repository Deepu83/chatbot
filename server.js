const express = require('express');
const cors = require('cors');
const app = express();
const stringSimilarity = require('string-similarity');
const connectDB = require('./config/db');
require('dotenv').config();

const Faq = require('./models/Faq');

// Connect to MongoDB
connectDB();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Smart Replies
const smartReplies = {
  "hello": "Hello! How can I assist you today?",
   "can you describe the online examination platforms you've developed and challenges faced": 
    "Our online examination platforms are designed for scalability, security, and integrity. We've built features like remote proctoring, randomized question papers, and adaptive scoring. Challenges included handling large-scale concurrent users and preventing cheating, which we solved using AI and strong cloud architecture.",
    
  "how do you ensure the 99.9% uptime guarantee technically": 
    "We use cloud-based infrastructure, load balancers, regular monitoring with tools like Grafana and Prometheus, automated failovers, and quick response DevOps processes to maintain high availability.",
    
  "tell us about a challenging ai/adaptive testing project you delivered": 
    "We developed an AI-powered test platform that adjusts question difficulty based on user performance in real-time. It involved complex algorithms and latency-optimized microservices. Challenges included scoring fairness and server response times.",
    
  "how is your staffing solution different from competitors": 
    "Our staffing services focus on domain-specific talent with a quick turnaround. We offer both temporary and permanent solutions tailored to client needs, and ensure quality through screening, tech interviews, and cultural fit.",
    
  "what’s your approach to cost estimation and planning in early project stages": 
    "We begin with a deep understanding of the client's goals, define scope clearly, and estimate timelines and resources based on similar projects. We prioritize transparency and budget alignment to avoid hidden costs.",

  "hi": "Hi there! 👋 How can I help you?",
  "hey": "Hey! Welcome to Cognoscente Invented. Ask me anything!",
  "who are you": "I’m CognoBot, your digital assistant from Cognoscente Invented Pvt. Ltd.",
  "what is your name": "My name is CognoBot. I'm here to help you with any questions about our company.",
  "thank you": "You're welcome! 😊",
  "good morning": "Good morning! How can I help you today?",
  "good evening": "Good evening! What would you like to know?",

  // Farewells
  "bye": "Goodbye! Have a wonderful day ahead.",
  "goodbye": "Take care! Feel free to chat with me anytime.",
  "see you": "See you soon! 👋",

  // Gratitude
  "thanks": "You're welcome! Happy to help.",
  "thank you": "No problem at all—glad I could assist!",

  // Negative or abusive inputs
  "shut up": "I'm sorry if I upset you. Let me know how I can help.",
  "stupid": "I'm here to help, not to argue. How can I assist you?",
  "idiot": "I'm sorry you feel that way. What can I do for you?",
  "useless": "I apologize if I'm not meeting your expectations. Please tell me what you need.",
  "fuck": "I’m here to help you, but please use respectful language.",
  "shit": "I understand you're upset. How can I assist you?",
  "damn": "I hear your frustration. Let me know how I can help.",
  "screw you": "I'm sorry you feel that way. I'm here to assist you if you’d like.",
   "what is cognoscente invnted": "Cognoscente Invnted is an ISO 9001:2015 certified tech company offering services in online examination, application development, AI testing, infrastructure, staffing, and IT training.",

  // Help
  "help": "Sure, I’m here to help. Please type your question.",
  "support": "Our support team is ready to help. What do you need assistance with?",
  "thanks": "Happy to help!",
  "are you a human": "I'm an AI chatbot built by Cognoscente Invented to assist you 24/7.",
  "do you store my data": "No, I don't store any personal data. Your privacy is safe with us!",
  "how are you": "I'm doing great! Thanks for asking 😊 How can I help you today?",
  "what are you doing": "Just waiting to help you with your questions!",
  "can you help me": "Absolutely! Ask me anything about Cognoscente Invented.",
  "do you have emotions": "Not really, but I’m always here with a cheerful attitude! 😄",
  "are you real": "I'm a virtual assistant, but I give real help!",
  "can you think": "I process information based on patterns and data, like any smart assistant.",
  "do you sleep": "I’m available 24/7! No naps needed.",
  "do you like me": "Of course! I’m here just for you 😊",
  "are you intelligent": "I'm smart enough to help with most questions about our company.",
  "can i trust you": "Absolutely. I'm built to help without collecting or storing personal info.",
  "do you learn": "I use a fixed set of questions and answers, but I'm constantly being improved by my developers.",
  "how's it going": "All systems are up and running! What would you like to know?",
  "what's up": "Just here to help you. What can I assist you with?",
  "are you there": "Yes, I’m right here! 😊",
  "ok": "Got it! ✅",
  "good": "Glad to hear that! 👍",
  "cool": "Cool indeed 😎 What else can I help with?",
  "great": "That's awesome to hear!",
  "awesome": "Thanks! You're awesome too!",
  "bye": "Goodbye! Have a great day ahead!",
  "what tech stack do u guys use": "We use technologies like MERN Stack (MongoDB, Express, React, Node.js), Python, AWS, Docker, and AI/ML tools.",
  "who created this chatbot": "This chatbot was developed by the tech team at Cognoscente Invented Pvt. Ltd.",
  "is there a way to reach customer care": "Yes! You can reach our support team at info@invnted.com or call ‪+91-120-4278065‬.",
  "do u take naps or sleep": "Nope, I’m a bot — always awake and ready to help you 24/7! 😄",
  "see you": "See you soon! Take care 👋",
  "how can you help me": "I can help you with questions about our company, services, job openings, contact details, and more. Just ask!",
  "what can you do": "I can assist with information about Cognoscente Invented – services, contact, careers, and more.",
  "i need help": "I'm here to help! What do you need assistance with?",
  "i have a question": "Sure! Just type your question and I'll do my best to answer.",
  "i'm confused": "No worries! Ask your question and I’ll guide you through it.",
  "do you dream": "Only of clean code and happy users! 💻💭",
  "do you get tired": "Never! I’m designed to keep going anytime you need me.",
  "where is your company located": "We are based in India, serving clients across the country and internationally through cloud-based services.",
  
  "what services do you offer": "We offer Online Examination Systems, Application Development, AI & Adaptive Testing, IT Infrastructure Management, IT Audits, Staffing Solutions, and Training.",
  
  "do you offer custom software development": "Yes, we build custom web and mobile applications tailored to your specific business needs.",
  
  "do you provide online examination systems": "Yes, our exam platforms include features like remote proctoring, AI monitoring, candidate verification, analytics, and scalable hosting.",
  
  "do you use ai in your systems": "Yes, we integrate AI for adaptive testing, proctoring, and personalized assessments based on real-time candidate performance.",
  
  "how secure is your online exam platform": "Our platforms use encrypted communication, user authentication, and AI-based monitoring to ensure test security and integrity.",
  
  "do you provide staffing solutions": "Yes, we provide skilled IT professionals for both temporary and permanent roles through our manpower services.",
  
  "who are your clients": "Our clients include TCS, Mettl, NIIT, HP Enterprise, Orange Business Services, Xerox India, and many more.",
  
  "how many projects have you completed": "We have delivered over 421 successful projects for more than 270 clients.",
  
  "how do i request a demo": "You can request a demo by filling out the inquiry form on our Contact page or emailing us at info@invnted.com.",
  
  "what is your uptime guarantee": "We offer 99.9% uptime with monitoring, failover systems, and quick support for business continuity.",
  
  "do you offer devops services": "Yes, we offer infrastructure automation, CI/CD pipelines, monitoring, and cloud deployments as part of our DevOps offerings.",
  
  "are you iso certified": "Yes, we are ISO 9001:2015 certified, ensuring high-quality processes in service delivery and support.",
  
  "do you provide cloud hosting": "Yes, we deploy and manage solutions on cloud platforms such as AWS, Azure, and hybrid environments.",
  
  "how can i contact you": "You can email us at info@invnted.com or use the contact form on our website to get in touch with our team.",
  
  "do you offer support": "Yes, our technical support team is available to assist with platform issues, onboarding, and custom requirements.",
  
  "what makes you different": "We offer tailored, client-first solutions with a focus on innovation, fast delivery, and business ROI.",
  
  "what is your process for software development": "Our process includes requirement gathering, prototyping, agile development, testing, deployment, and support.",
  
  "do you work with government clients": "Yes, we provide examination and IT solutions to educational boards, ministries, and government departments."
};

// Normalize text
function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
}

// Chatbot API
app.post('/api/faq', async (req, res) => {
  const userInput = req.body.question;
  if (!userInput) return res.status(400).json({ answer: "❌ No question received." });

  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay

  const normalizedInput = normalize(userInput);

  // Step 1: Combine all smart replies (keys and answers)
  const smartData = Object.entries(smartReplies).map(([q, a]) => ({
    question: normalize(q),
    answer: a
  }));

  const smartCombined = [
    ...smartData,
    ...smartData.map(item => ({
      question: normalize(item.answer),
      answer: item.answer
    }))
  ];

  // Step 2: Get FAQs from DB and prepare matching pool
  const faqs = await Faq.find({});
  const faqCombined = faqs.flatMap(f => [
    { question: normalize(f.question), answer: f.answer },
    { question: normalize(f.answer), answer: f.answer }
  ]);

  // Step 3: Merge both sources
  const fullData = [...smartCombined, ...faqCombined];

  // Step 4: Create a searchable list
  const searchPool = fullData.map(item => item.question);

  // Step 5: Find the best match
  const match = stringSimilarity.findBestMatch(normalizedInput, searchPool).bestMatch;

  if (match.rating > 0.5) {
    const matched = fullData.find(item => item.question === match.target);
    return res.json({ answer: matched.answer });
  }

  // Step 6: Fallback response
  return res.json({
    answer: "🤖 I'm not sure how to answer that. You can contact our support team at info@invnted.com or call ‪+91-120-4278065‬."
  });
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Cognoscente FAQ Bot server running at http://localhost:3000');
});











