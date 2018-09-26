const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = class Base {
    constructor() {
      this.createdAt = {
        type: Date,
        default: Date.now()
      }
      this.updatedAt = {
          type: Date,
          default: Date.now()
      }
    }
}
