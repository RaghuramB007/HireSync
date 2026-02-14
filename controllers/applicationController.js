const Application = require("../models/Application");

// Create
exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get One
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    res.status(200).json(application);
  } catch (error) {
    res.status(404).json({ message: "Application not found" });
  }
};

// Update
exports.updateApplication = async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Application deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
