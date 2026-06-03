const User = require('../models/User');

exports.login = async (
  req,
  res
) => {

  const {
    uid,
    email,
    name,
    picture,
    provider
  } = req.body;

  let user =
    await User.findOne({
      firebaseUid: uid
    });

  if (!user) {

    user =
      await User.create({

        firebaseUid: uid,
        email,
        displayName: name,
        photoURL: picture,
        provider

      });

  }

  res.json(user);
};
