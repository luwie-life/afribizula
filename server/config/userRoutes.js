const express =
require('express');

const verifyFirebaseToken =
require('../middleware/verifyFirebaseToken');

const router =
express.Router();

router.get(
  '/profile',
  verifyFirebaseToken,
  (req, res) => {

    res.json(req.user);

  }
);

module.exports = router;
