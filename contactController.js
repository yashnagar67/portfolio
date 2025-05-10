const Contact = require('./contactModel');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message, interest } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and message'
      });
    }

    // Create contact entry
    const contact = await Contact.create({
      name,
      email,
      message,
      interest: interest || 'collaboration' // Use the interest from the form or default
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Thank you for your message! I will get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
}; 