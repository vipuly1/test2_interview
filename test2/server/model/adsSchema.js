const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  companyId: {
    type: Number,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const ad =  mongoose.model("ads", adsSchema);
module.exports = {ad}