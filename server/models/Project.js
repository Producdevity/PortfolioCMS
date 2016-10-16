var mongoose = require('mongoose');

// Create ProjecSchema
var ProjecSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = mongoose.model('project', ProjecSchema);