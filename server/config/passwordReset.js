const admin =
  require('../config/firebaseAdmin');

exports.forgotPassword =
async (req, res) => {

  try {

    const { email } = req.body;

    const link =
      await admin.auth()
      .generatePasswordResetLink(email);

    // Send link using email service

    res.json({
      success: true,
      message: 'Reset link generated'
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};
