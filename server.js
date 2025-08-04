// const express = require('express');
// const cors = require('cors');
// const app = express();
// const stringSimilarity = require('string-similarity');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const Faq = require('./models/Faq');

// // Connect to MongoDB
// connectDB();
// app.use(cors({ origin: '*' }));
// app.use(express.json());

// const smartReplies = {
//   "hello": "Hello! How can I assist you today?",
//    "hello": "Hello! Welcome to Cognoscente Invnted Private Limited. How can I assist you today?",
  
//   "what is cognoscente invnted private limited?": "Cognoscente Invnted Private Limited is a next-generation global technology company that aims to help enterprises reimagine their businesses for the digital age. The company is ISO 9001:2008 certified and delivers services in various fields, including Applications Development, IT Infrastructure, Manpower Staffing, IT Consulting, IT Audits, and Skill Development/Training. Since its launch, Cognoscente Invnted has focused on building and implementing innovative solutions that empower clients' businesses and enhance their lives. The team is characterized by their imagination, knowledge, and experience across technologies. They prioritize improving client services and work efficiently and dedicatedly on each project.",
  
//   "tell me about your services.": "We offer services including Application Development, IT Infrastructure, Manpower Staffing, IT Consulting, IT Audits, and Skill Development/Training. Our solutions help businesses improve customer experiences, streamline workflows, and leverage new digital opportunities for strategic decision-making.",
  
//   "where are you located?": "Our corporate office is located at A-35, First Floor, Madhu Vihar, Delhi-110092, India. We also have branch offices such as Block-B, Sector 6, Noida - 201301, Uttar Pradesh.",
  
//   "how can i contact cognoscente invnted?": "You can reach us by phone at +91120-4278065 or email at info@invnted.com. We are happy to assist you with your inquiries.",
  
//   "who is on your leadership team?": "Our leadership team includes Ashutosh Maurya, Founder & CEO; Nalani Sharma, Director; and Anjula, Director. Together, they guide our company with vision and expertise.",
  
//   "thanks!": "You're welcome! If you have any more questions, feel free to ask.",
  
//   "who are you": "We are CIPL (Cognoscente Invnted Pvt. Ltd.), located at Block-B, Sector 6, Noida - 201301, Uttar Pradesh, India.",
  
//   "what is this privacy policy about": "This Privacy Policy explains how CIPL collects, uses, shares, and protects your personal information on our websites and services.",
  
//   "what personal information do you collect": "We collect personal information you provide, such as your name, contact details, professional credentials, and information gathered automatically like IP address, browser details, and navigation history.",
  
//   "do you use cookies or tracking technologies": "Yes, we and our partners use cookies and similar technologies to analyze trends, administer our website, and gather demographic information. You can control cookies through your browser settings.",
  
//   "how do you use my personal information": "We use your information to provide and administer our services, improve our websites, contact you, market our products, keep systems safe, and provide requested support.",
  
//   "do you share my personal information": "We may share your personal information with third parties such as our vendors and members of the CIPL group to provide services like payment processing, customer support, marketing, and cloud infrastructure. We also comply with legal requirements when necessary.",
  
//   "how long do you keep my personal information": "We keep your personal data as long as needed for the purposes it was collected, to comply with legal obligations, resolve disputes, and enforce agreements.",
  
//   "where is my personal information stored": "Your data may be stored and processed on servers worldwide, including outside your country or region. We ensure appropriate safeguards are in place to protect your data.",
  
//   "what rights do i have regarding my personal information": "You have rights such as accessing, correcting, deleting, or restricting your data processing. You can opt-out of marketing emails and control cookies. Requests can be made by contacting info@invnted.com.",
  
//   "how do you safeguard my personal information": "We implement security measures to protect your data, but we cannot guarantee security when data is transmitted over the internet or via email. You are responsible for safeguarding your login credentials.",
  
//   "how will you update this privacy policy": "We may update this policy as our business or technology evolves. We will notify you of material changes via email, website notices, or other methods.",
  
//   "how can i contact you about privacy concerns": "For any questions about this Privacy Policy or your personal data, please email our Data Protection Officer at info@invnted.com.",
  
//   "do you market to children": "No, our services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13 online.",

//   "what is cognoscente invnted private limited": "Cognoscente Invnted Private Limited is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. It is ISO 9001:2008 certified and provides services in Application Development, IT Infrastructure, Manpower Staffing, IT Consulting, IT Audits, and Skill Development/Training.",
  
//   "what services does cognoscente invnted offer": "We offer Application Development, IT Infrastructure management, Manpower Staffing, IT Consulting, IT Audits, Online Examination services, Artificial Intelligence solutions, and Skill Development/Training.",
  
//   "how does cognoscente invnted work": "Our team is dedicated to improving client services by working quickly and efficiently, continuously seeking ways to enhance service quality and deliver innovative enterprise solutions.",
  
//   "what industries or clients do you serve": "We serve entrepreneurs, start-ups, enterprises, and top IT companies worldwide, helping shape their ideas into products and digital experiences.",
  
//   "what certifications does cognoscente invnted have": "Cognoscente Invnted is ISO 9001:2008 and ISO 9001:2015 certified, ensuring commitment to quality and continuous improvement.",
  
//   "how can i contact cognoscente invnted": "You can contact us at our corporate office: A-35, First Floor, Madhu Vihar, Delhi-110092. Phone: +91120-4278065. Email: info@invnted.com.",
  
//   "what is your approach to quality assurance": "We focus on delivering high-performing and superior user experiences through continuous quality assurance testing, strategic planning, and validation to accelerate time to market.",
  
//   "does cognoscente invnted provide online examination services": "Yes, we specialize in online examination solutions both in India and overseas to help measure participant knowledge effectively.",
  
//   "what kind of technology services do you provide": "We provide services in Mobile Application development, Website Designing, Software Development, Artificial Intelligence, IT Infrastructure, IT Audits, Manpower Staffing, and IT Consulting.",
  
//   "how can cognoscente invnted help improve my business": "We empower businesses by delivering innovative IT solutions, improving customer experiences, streamlining workflows, and enabling strategic decision making for growth.",
  
//   "who is your target audience": "Our solutions are designed for entrepreneurs, startups, enterprises, and IT companies seeking digital transformation and IT services.",
  
//   "what is the team like at cognoscente invnted": "Our team is characterized by imagination, knowledge, and experience across various technologies, committed to delivering excellence and nurturing client relationships.",
  
//   "how do you ensure customer satisfaction": "We prioritize fast, friendly, and knowledgeable support, guaranteeing 99.9% uptime and quick response to client issues, ensuring long-term customer happiness.",
//   "can you describe the online examination platforms you've developed and challenges faced": 
//     "Our online examination platforms are designed for scalability, security, and integrity. We've built features like remote proctoring, randomized question papers, and adaptive scoring. Challenges included handling large-scale concurrent users and preventing cheating, which we solved using AI and strong cloud architecture.",
//   "how do you ensure the 99.9% uptime guarantee technically": 
//     "We use cloud-based infrastructure, load balancers, regular monitoring with tools like Grafana and Prometheus, automated failovers, and quick response DevOps processes to maintain high availability.",
//   "tell us about a challenging ai/adaptive testing project you delivered": 
//     "We developed an AI-powered test platform that adjusts question difficulty based on user performance in real-time. It involved complex algorithms and latency-optimized microservices. Challenges included scoring fairness and server response times.",
//   "how is your staffing solution different from competitors": 
//     "Our staffing services focus on domain-specific talent with a quick turnaround. We offer both temporary and permanent solutions tailored to client needs, and ensure quality through screening, tech interviews, and cultural fit.",
//   "what’s your approach to cost estimation and planning in early project stages": 
//     "We begin with a deep understanding of the client's goals, define scope clearly, and estimate timelines and resources based on similar projects. We prioritize transparency and budget alignment to avoid hidden costs.",
//   "hi": "Hi there! 👋 How can I help you?",
//   "hey": "Hey! Welcome to Cognoscente Invented. Ask me anything!",
//   "who are you": "I’m CognoBot, your digital assistant from Cognoscente Invented Pvt. Ltd.",
//   "what is your name": "My name is CognoBot. I'm here to help you with any questions about our company.",
//   "thank you": "You're welcome! 😊",
//   "good morning": "Good morning! How can I help you today?",
//   "good evening": "Good evening! What would you like to know?",
//   "bye": "Goodbye! Have a wonderful day ahead.",
//   "goodbye": "Take care! Feel free to chat with me anytime.",
//   "see you": "See you soon! 👋",
//   "thanks": "You're welcome! Happy to help.",
//   "shut up": "I'm sorry if I upset you. Let me know how I can help.",
//   "stupid": "I'm here to help, not to argue. How can I assist you?",
//   "idiot": "I'm sorry you feel that way. What can I do for you?",
//   "useless": "I apologize if I'm not meeting your expectations. Please tell me what you need.",
//   "fuck": "I’m here to help you, but please use respectful language.",
//   "shit": "I understand you're upset. How can I assist you?",
//   "damn": "I hear your frustration. Let me know how I can help.",
//   "screw you": "I'm sorry you feel that way. I'm here to assist you if you’d like.",
//   "what is cognoscente invnted": "Cognoscente Invnted is an ISO 9001:2015 certified tech company offering services in online examination, application development, AI testing, infrastructure, staffing, and IT training.",
//   "help": "Sure, I’m here to help. Please type your question.",
//   "support": "Our support team is ready to help. What do you need assistance with?",
//   "are you a human": "I'm an AI chatbot built by Cognoscente Invented to assist you 24/7.",
//   "do you store my data": "No, I don't store any personal data. Your privacy is safe with us!",
//   "how are you": "I'm doing great! Thanks for asking 😊 How can I help you today?",
//   "what are you doing": "Just waiting to help you with your questions!",
//   "can you help me": "Absolutely! Ask me anything about Cognoscente Invented.",
//   "do you have emotions": "Not really, but I’m always here with a cheerful attitude! 😄",
//   "are you real": "I'm a virtual assistant, but I give real help!",
//   "can you think": "I process information based on patterns and data, like any smart assistant.",
//   "do you sleep": "I’m available 24/7! No naps needed.",
//   "do you like me": "Of course! I’m here just for you 😊",
//   "are you intelligent": "I'm smart enough to help with most questions about our company.",
//   "can i trust you": "Absolutely. I'm built to help without collecting or storing personal info.",
//   "do you learn": "I use a fixed set of questions and answers, but I'm constantly being improved by my developers.",
//   "how's it going": "All systems are up and running! What would you like to know?",
//   "what's up": "Just here to help you. What can I assist you with?",
//   "are you there": "Yes, I’m right here! 😊",
//   "ok": "Got it! ✅",
//   "good": "Glad to hear that! 👍",
//   "cool": "Cool indeed 😎 What else can I help with?",
//   "what is cognoscente invnted private limited": "Cognoscente Invnted Private Limited is a next-generation global technology company, ISO 9001:2008 certified, that helps enterprises reimagine their businesses for the digital age. We provide services in Application Development, IT Infrastructure, Manpower Staffing, IT Consulting, IT Audits, and Skill Development/Training.",
  
//   "what services does cognoscente invnted offer": "We offer a variety of IT services including Online Examination solutions, Mobile and Web Application development, IT Infrastructure management, IT Audits, Manpower Staffing, and IT Consulting.",
  
//   "what industries or clients do you serve": "We serve entrepreneurs, startups, and enterprises worldwide, including top IT companies, helping them build innovative enterprise solutions.",
  
//   "what makes cognoscente invnted different from other it companies": "We focus on building and implementing great ideas with a dedicated, experienced team. We emphasize nurturing relationships and delivering solutions that empower businesses and enhance lives.",
  
//   "is cognoscente invnted certified": "Yes, we are ISO 9001:2008 certified, reflecting our commitment to quality and continuous improvement.",
  
//   "how does cognoscente invnted ensure quality in its services": "We implement thorough quality assurance testing, test strategies, planning, procedures, and validations to deliver high-performing and superior user experiences.",
  
//   "where is cognoscente invnted located": "Our corporate office is at A-35, First Floor, Madhu Vihar, Delhi-110092, India.",
  
//   "how can i contact cognoscente invnted": "You can reach us by phone at +91120-4278065 or email at info@invnted.com.",
  
//   "does cognoscente invnted provide support after project delivery": "Yes, we guarantee uptime, responsive support, and dedicated services with a 99.9% uptime guarantee.",
  
//   "can cognoscente invnted help with online examinations": "Absolutely! We specialize in delivering online exam services for clients in India and overseas, helping create exams to measure participant knowledge effectively.",
  
//   "what kind of it consulting do you offer": "Our IT consulting covers website designing, software development, and providing cost-effective solutions using the latest technologies and skilled manpower.",
  
//   "does cognoscente invnted offer manpower staffing services": "Yes, we provide permanent staffing, temporary staffing, and temporary-to-permanent staffing solutions.",
  
//   "how does cognoscente invnted manage it audits": "We conduct thorough examinations and evaluations of your IT infrastructure, policies, and operations to ensure data integrity and protection of corporate assets.",
  
//   "what technologies does cognoscente invnted use": "We use a range of modern technologies tailored to each project, including mobile and web app development tools, data platforms, and digital transformation solutions.",
  
//   "how do i subscribe to cognoscente invnted newsletters": "You can subscribe to our newsletters via our website to stay updated on our latest news and offerings.",
  
//   "we use cloud-based infrastructure": "We use cloud-based infrastructure, load balancers, regular monitoring with tools like Grafana and Prometheus, automated failovers, and quick response DevOps processes to maintain high availability.",
  
//   "tell us about a challenging ai/adaptive testing project you delivered": "We developed an AI-powered test platform that adjusts question difficulty based on user performance in real-time. It involved complex algorithms and latency-optimized microservices. Challenges included scoring fairness and server response times.",
  
//   "how is your staffing solution different from competitors": "Our staffing services focus on domain-specific talent with a quick turnaround. We offer both temporary and permanent solutions tailored to client needs, and ensure quality through screening, tech interviews, and cultural fit.",
  
//   "what’s your approach to cost estimation and planning in early project stages": "We begin with a deep understanding of the client's goals, define scope clearly, and estimate timelines and resources based on similar projects. We prioritize transparency and budget alignment to avoid hidden costs.",
  
//   "great": "That's awesome to hear!",
//   "awesome": "Thanks! You're awesome too!",
//   "what tech stack do u guys use": "We use technologies like MERN Stack (MongoDB, Express, React, Node.js), Python, AWS, Docker, and AI/ML tools.",
//   "who created this chatbot": "This chatbot was developed by the tech team at Cognoscente Invented Pvt. Ltd.",
//   "is there a way to reach customer care": "Yes! You can reach our support team at info@invnted.com or call ‪+91-120-4278065‬.",
//   "do u take naps or sleep": "Nope, I’m a bot — always awake and ready to help you 24/7! 😄",
//   "see you": "See you soon! Take care 👋",
//   "What industries or clients do you serve?":"We serve entrepreneurs, startups, and enterprises worldwide, including top IT companies, helping them build innovative enterprise solutions",
//   "how can you help me": "I can help you with questions about our company, services, job openings, contact details, and more. Just ask!",
//   "what can you do": "I can assist with information about Cognoscente Invented – services, contact, careers, and more.",
//   "i need help": "I'm here to help! What do you need assistance with?",
//   "i have a question": "Sure! Just type your question and I'll do my best to answer.",
//   "i'm confused": "No worries! Ask your question and I’ll guide you through it.",
//   "do you dream": "Only of clean code and happy users! 💻💭",
//    "what services does cognoscente invnted provide": "Cognoscente Invnted provides IT services including Application Development, IT Infrastructure, Manpower Staffing, IT Consulting, IT Audits, Skill Development/Training, and web and mobile application solutions tailored to your business needs.",

//   "how does cognoscente invnted work with clients": "We collaborate with clients through innovation-led ideas and technology-driven IT solutions to overcome business challenges. We focus on digital growth to create smarter development strategies and remarkable brand experiences.",

//   "what is cognoscente invnted's methodology": "With over 5 years of experience, our methodology adapts to projects of all sizes and types, leveraging the latest web technologies to deliver solutions efficiently and effectively.",

//   "how can cognoscente invnted help my business": "We thoroughly discuss your requirements considering target audience needs and market trends, then create legitimate strategies and concepts tailored to your business to deliver perfect design and development outcomes.",

//   "why choose cognoscente invnted": "We are well-versed in IT services and provide end-to-end solutions that empower businesses to boost conversion rates and revenues, backed by certified quality and a dedicated team.",

//   "where is cognoscente invnted located": "Our office is located at B-59, 2nd Floor, Sector - 6, Noida - 201301, Uttar Pradesh, India.",

//   "how can i contact cognoscente invnted": "You can contact us by phone at +91120-4278065 or email at info@invnted.com.",

//   "how do i subscribe to cognoscente invnted newsletters": "You can subscribe to our newsletters on our website to receive the latest updates and news about Cognoscente Invnted.",

//   "what industries does cognoscente invnted serve": "We serve a broad range of industries including IT companies, startups, enterprises, and businesses looking for digital transformation and IT solutions.",

//   "what is the address of cognoscente invnted noida office": "Cognoscente Invnted Noida office is located at B-59, 2nd Floor, Sector - 6, Noida - 201301, Uttar Pradesh, India.",
//   "do you get tired": "Never! I’m designed to keep going anytime you need me.",
//   "where is your company located": "We are based in India, serving clients across the country and internationally through cloud-based services.",
//   "what services do you offer": "We offer Online Examination Systems, Application Development, AI & Adaptive Testing, IT Infrastructure Management, IT Audits, Staffing Solutions, and Training.",
//   "do you offer custom software development": "Yes, we build custom web and mobile applications tailored to your specific business needs.",
//   "do you provide online examination systems": "Yes, our exam platforms include features like remote proctoring, AI monitoring, candidate verification, analytics, and scalable hosting.",
//   "do you use ai in your systems": "Yes, we integrate AI for adaptive testing, proctoring, and personalized assessments based on real-time candidate performance.",
//   "how secure is your online exam platform": "Our platforms use encrypted communication, user authentication, and AI-based monitoring to ensure test security and integrity.",
//   "do you provide staffing solutions": "Yes, we provide skilled IT professionals for both temporary and permanent roles through our manpower services.",
//   "who are your clients": "Our clients include TCS, Mettl, NIIT, HP Enterprise, Orange Business Services, Xerox India, and many more.",
//   "how many projects have you completed": "We have delivered over 421 successful projects for more than 270 clients.",
//   "how do i request a demo": "You can request a demo by filling out the inquiry form on our Contact page or emailing us at info@invnted.com.",
//   "what is your uptime guarantee": "We offer 99.9% uptime with monitoring, failover systems, and quick support for business continuity.",
//   "do you offer devops services": "Yes, we offer infrastructure automation, CI/CD pipelines, monitoring, and cloud deployments as part of our DevOps offerings.",
//   "are you iso certified": "Yes, we are ISO 9001:2015 certified, ensuring high-quality processes in service delivery and support.",
//   "do you provide cloud hosting": "Yes, we deploy and manage solutions on cloud platforms such as AWS, Azure, and hybrid environments.",
//   "how can i contact you": "You can email us at info@invnted.com or use the contact form on our website to get in touch with our team.",
//   "do you offer support": "Yes, our technical support team is available to assist with platform issues, onboarding, and custom requirements.",
//   "what makes you different": "We offer tailored, client-first solutions with a focus on innovation, fast delivery, and business ROI.",
//   "what is your process for software development": "Our process includes requirement gathering, prototyping, agile development, testing, deployment, and support.",
//   "do you work with government clients": "Yes, we provide examination and IT solutions to educational boards, ministries, and government departments."
// };


// // Normalize text
// function normalize(text) {
//   return text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
// }

// // Chatbot API
// app.post('/api/faq', async (req, res) => {
//   const userInput = req.body.question;
//   if (!userInput) return res.status(400).json({ answer: "❌ No question received." });

//   await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay

//   const normalizedInput = normalize(userInput);

//   // Step 1: Combine all smart replies (keys and answers)
//   const smartData = Object.entries(smartReplies).map(([q, a]) => ({
//     question: normalize(q),
//     answer: a
//   }));

//   const smartCombined = [
//     ...smartData,
//     ...smartData.map(item => ({
//       question: normalize(item.answer),
//       answer: item.answer
//     }))
//   ];

//   // Step 2: Get FAQs from DB and prepare matching pool
//   const faqs = await Faq.find({});
//   const faqCombined = faqs.flatMap(f => [
//     { question: normalize(f.question), answer: f.answer },
//     { question: normalize(f.answer), answer: f.answer }
//   ]);

//   // Step 3: Merge both sources
//   const fullData = [...smartCombined, ...faqCombined];

//   // Step 4: Create a searchable list
//   const searchPool = fullData.map(item => item.question);

//   // Step 5: Find the best match
//   const match = stringSimilarity.findBestMatch(normalizedInput, searchPool).bestMatch;

//   if (match.rating > 0.5) {
//     const matched = fullData.find(item => item.question === match.target);
//     return res.json({ answer: matched.answer });
//   }

//   // Step 6: Fallback response
//   return res.json({
//     answer: "🤖 I'm not sure how to answer that. You can contact our support team at info@invnted.com or call ‪+91-120-4278065‬."
//   });
// });

// // Start the server
// app.listen(3000, '0.0.0.0', () => {
//   console.log('✅ Cognoscente FAQ Bot server running at http://localhost:3000');
// });








//updated code 





// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const puppeteer = require('puppeteer');
// const smartReplies = require('./faq'); // Your FAQ { question: answer }

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 3000;
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBpY3BeJnYj1Hb63GsaB1ITcTItG74sZuA`;


// // Global variable to hold scraped site content
// let websiteContent = "";

// // Function to scrape website text with Puppeteer
// async function scrapeWebsite(url) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox'], // For some environments like Docker
//     });
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle2' });

//     // Get visible text content from body
//     const text = await page.evaluate(() => document.body.innerText);

//     await browser.close();
//     return text;
//   } catch (err) {
//     console.error('Error scraping website:', err);
//     return "";
//   }
// }

// // 1. Common company intro triggers
// const companyIntroQuestions = [
//   "tell me about your company",
//   "who are you",
//   "what is your company",
//   "about your company",
//   "can you describe your company",
//   "what do you do",
//   "what services do you provide",
//   "your company",
//   "who is this"
// ];

// const companyIntroAnswer = `Cognoscente Invnted Pvt. Ltd is an ISO 9001:2015 certified tech company specializing in online examination platforms, application development, AI testing, infrastructure, staffing, and IT training. You can learn more on https://invnted.com/.`;

// function isCompanyIntroQuestion(input) {
//   input = input.toLowerCase().trim();
//   return companyIntroQuestions.some(q => input.includes(q));
// }

// // 2. Casual replies
// const casualReplies = {
//   "hello": "Hello! 👋 How can I assist you regarding Cognoscente Invnted Pvt. Ltd?",
//   "hi": "Hi there! 😊 Ask me anything about Cognoscente Invnted Pvt. Ltd.",
//   "thanks": "You're welcome! 🙌",
//   "thank you": "You're most welcome! 😊",
//   "bye": "Goodbye! Have a great day! 👋",
//   "goodbye": "Take care! 👋 Let me know if you need any help.",
//   "ok": "Alright! Let me know if you have any questions about Cognoscente.",
//   "okay": "Sure thing! 😊"
// };

// function findCasualResponse(input) {
//   input = input.toLowerCase().trim();
//   for (const key of Object.keys(casualReplies)) {
//     if (input.includes(key)) {
//       return casualReplies[key];
//     }
//   }
//   return null;
// }

// // Normalize text for matching: lowercase, remove spaces and punctuation
// function normalizeForMatch(text) {
//   return text
//     .toLowerCase()
//     .replace(/\s+/g, '')       // remove all spaces
//     .replace(/[^\w]/g, '');    // remove all non-word chars (punctuation)
// }

// // Improved fuzzy match for FAQ keys
// function findBestFAQMatch(input) {
//   const normInput = normalizeForMatch(input);
//   const keys = Object.keys(smartReplies);

//   let bestMatch = null;
//   let bestScore = 0;

//   for (const key of keys) {
//     const normKey = normalizeForMatch(key);

//     if (normInput === normKey) {
//       // Perfect match
//       return key;
//     }

//     if (normKey.includes(normInput) || normInput.includes(normKey)) {
//       const score = Math.min(normInput.length, normKey.length);
//       if (score > bestScore) {
//         bestScore = score;
//         bestMatch = key;
//       }
//     }
//   }
//   return bestMatch;
// }

// // Vary answer style
// function varyAnswer(answer) {
//   const templates = [
//     answer,
//     `Sure! Here's what I know: ${answer}`,
//     `Regarding that, I can tell you: ${answer}`,
//     `Glad you asked! ${answer}`,
//     `Here's some info: ${answer}`,
//     `${answer} If you want to know more, just ask!`
//   ];
//   return templates[Math.floor(Math.random() * templates.length)];
// }

// // 🧠 Chatbot Route
// app.post('/api/faq', async (req, res) => {
//   const userInputRaw = req.body.question;
//   if (!userInputRaw) {
//     return res.status(400).json({ answer: "❌ No question received." });
//   }

//   const userInput = userInputRaw.toLowerCase().trim();

//   // 1. Company intro
//   if (isCompanyIntroQuestion(userInput)) {
//     return res.json({ answer: varyAnswer(companyIntroAnswer) });
//   }

//   // 2. Casual conversation
//   const casualResponse = findCasualResponse(userInput);
//   if (casualResponse) {
//     return res.json({ answer: casualResponse });
//   }

//   // 3. FAQ match
//   const bestMatch = findBestFAQMatch(userInput);
//   if (bestMatch) {
//     const faqAnswer = smartReplies[bestMatch];
//     return res.json({ answer: varyAnswer(faqAnswer) });
//   }

//   // 4. Gemini fallback with website context
//   const promptText = `
// You are a helpful assistant trained ONLY on information about Cognoscente Invnted Pvt. Ltd, based on the website content below:

// ${websiteContent}

// Answer ONLY questions related to this company and its services, projects, clients, and policies.
// If a question is unrelated or outside this scope, politely respond:
// "I'm sorry, I can only answer questions related to Cognoscente Invnted Pvt. Ltd. Please ask about the company."

// User question: ${userInputRaw}
//   `;

//   try {
//     const response = await axios.post(
//       GEMINI_API_URL,
//       {
//         contents: [
//           {
//             parts: [{ text: promptText.trim() }]
//           }
//         ]
//       },
//       {
//         headers: { 'Content-Type': 'application/json' }
//       }
//     );

//     const geminiAnswer = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (geminiAnswer) {
//       return res.json({ answer: geminiAnswer });
//     } else {
//       return res.json({ answer: "🤖 AI did not provide an answer." });
//     }
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     return res.json({
//       answer: "⚠️ I’m having trouble reaching AI right now. Please try again later.",
//     });
//   }
// });

// // Start server after scraping site content
// (async () => {
//   console.log("🚀 Starting to scrape website for context...");
//   websiteContent = await scrapeWebsite('https://invnted.com/');
//   console.log("✅ Website scraped, starting server...");

//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// })();
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const puppeteer = require('puppeteer');
const Fuse = require('fuse.js'); // ✅ Fuse.js added
const smartReplies = require('./faq'); // Your FAQ { question: answer }

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBpY3BeJnYj1Hb63GsaB1ITcTItG74sZuA`;

// Global variable to hold scraped site content
let websiteContent = "";

// Function to scrape website text with Puppeteer
async function scrapeWebsite(url) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const text = await page.evaluate(() => document.body.innerText);
    await browser.close();
    return text;
  } catch (err) {
    console.error('Error scraping website:', err);
    return "";
  }
}

// 1. Company intro triggers
const companyIntroQuestions = [
  "tell me about your company", "who are you", "what is your company",
  "about your company", "can you describe your company", "what do you do",
  "what services do you provide", "your company", "who is this"
];

const companyIntroAnswer = `Cognoscente Invnted Pvt. Ltd is an ISO 9001:2015 certified tech company specializing in online examination platforms, application development, AI testing, infrastructure, staffing, and IT training. You can learn more on https://invnted.com/.`;

function isCompanyIntroQuestion(input) {
  input = input.toLowerCase().trim();
  return companyIntroQuestions.some(q => input.includes(q));
}

// 2. Casual replies
const casualReplies = {
  "hello": "Hello! 👋 How can I assist you regarding Cognoscente Invnted Pvt. Ltd?",
  "hi": "Hi there! 😊 Ask me anything about Cognoscente Invnted Pvt. Ltd.",
  "thanks": "You're welcome! 🙌",
  "thank you": "You're most welcome! 😊",
  "bye": "Goodbye! Have a great day! 👋",
  "goodbye": "Take care! 👋 Let me know if you need any help.",
  "ok": "Alright! Let me know if you have any questions about Cognoscente.",
  "okay": "Sure thing! 😊"
};

function findCasualResponse(input) {
  input = input.toLowerCase().trim();
  for (const key of Object.keys(casualReplies)) {
    if (input.includes(key)) {
      return casualReplies[key];
    }
  }
  return null;
}

// 3. Fuse.js-based smart matching
const fuse = new Fuse(Object.keys(smartReplies), {
  includeScore: true,
  threshold: 0.4, // Lower = more strict
  ignoreLocation: true,
});

function findBestFAQMatch(input) {
  const result = fuse.search(input.trim().toLowerCase());
  if (result.length > 0) {
    return result[0].item;
  }
  return null;
}

// Vary response styles
function varyAnswer(answer) {
  const templates = [
    answer,
    `Sure! Here's what I know: ${answer}`,
    `Regarding that, I can tell you: ${answer}`,
    `Glad you asked! ${answer}`,
    `Here's some info: ${answer}`,
    `${answer} If you want to know more, just ask!`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Chatbot route
app.post('/api/faq', async (req, res) => {
  const userInputRaw = req.body.question;
  if (!userInputRaw) {
    return res.status(400).json({ answer: "❌ No question received." });
  }

  const userInput = userInputRaw.toLowerCase().trim();

  // 1. Company intro
  if (isCompanyIntroQuestion(userInput)) {
    return res.json({ answer: varyAnswer(companyIntroAnswer) });
  }

  // 2. Casual chat
  const casualResponse = findCasualResponse(userInput);
  if (casualResponse) {
    return res.json({ answer: casualResponse });
  }

  // 3. Match FAQ using Fuse
  const bestMatch = findBestFAQMatch(userInput);
  if (bestMatch) {
    const faqAnswer = smartReplies[bestMatch];
    return res.json({ answer: varyAnswer(faqAnswer) });
  }

  // 4. Fallback to Gemini with website context
  const promptText = `
You are a helpful assistant trained ONLY on information about Cognoscente Invnted Pvt. Ltd, based on the website content below:

${websiteContent}

Answer ONLY questions related to this company and its services, projects, clients, and policies.
If a question is unrelated or outside this scope, politely respond:
"I'm sorry, I can only answer questions related to Cognoscente Invnted Pvt. Ltd. Please ask about the company."

User question: ${userInputRaw}
`;

  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: promptText.trim() }] }]
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const geminiAnswer = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (geminiAnswer) {
      return res.json({ answer: geminiAnswer });
    } else {
      return res.json({ answer: "🤖 AI did not provide an answer." });
    }
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    return res.json({
      answer: "I’m not sure. Please try again later.",
    });
  }
});

// Start server after scraping
(async () => {
  console.log("🚀 Scraping https://invnted.com/...");
  websiteContent = await scrapeWebsite('https://invnted.com/');
  console.log("✅ Scraping complete. Starting server...");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})();
