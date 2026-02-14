const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    location: String,
    salary: Number,
    status: {
      type: String,
      enum: ["Applied", "Interview", "Technical", "HR", "Offer", "Rejected"],
      default: "Applied",
    },
    dateApplied: {
      type: Date,
      default: Date.now,
    },
    interviewDate: Date,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
