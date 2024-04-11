const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
