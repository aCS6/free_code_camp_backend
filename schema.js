const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  age: {
    type: Number,
    min: [0, 'Age must be a positive number']
  },
  favoriteFoods: {
    type: [String],
    default: [],
    validate: {
      validator: function (arr) {
        // Ensure all items are non-empty strings
        const allValidStrings = arr.every(food => typeof food === 'string' && food.trim().length > 0);

        // Ensure there are no duplicates (case-insensitive)
        const normalized = arr.map(f => f.trim().toLowerCase());
        const noDuplicates = new Set(normalized).size === normalized.length;

        return allValidStrings && noDuplicates;
      },
      message: 'Each favorite food must be a unique, non-empty string'
    }
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email address']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
