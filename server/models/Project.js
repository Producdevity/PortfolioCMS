var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create ProjecSchema
var ProjecSchema = new Schema({
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