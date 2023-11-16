// models/quiz.js
// const mongoose = require('mongoose');

// const quizSchema = new mongoose.Schema({
//   question: String,
//   index: Number,
//   answers: {
//     options: [String],
//     weightage: [Number],
//     answertype: Number
//   },
// });

// module.exports = mongoose.model('Quiz', quizSchema, 'Quiz');

const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: String,
  weightage: Number,
});

const questionSchema = new mongoose.Schema({
  index: Number,
  section: String,
  question: String,
  answers: [answerSchema],
  answertype: Number,
});

const quizSchema = new mongoose.Schema({
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz', quizSchema, 'Quiz');

