const KeyGrip = require("keyGrip");
const keys = require("../../config/keys");
const keyGrip = new KeyGrip([keys.cookieKey]);

module.exports = (user) => {
  const fakeSession = {
    passport: { user: user._id.toString() },
  };
  const session = new Buffer.from(JSON.stringify(fakeSession)).toString(
    "base64"
  );
  const sig = keyGrip.sign("session=" + session);

  return { session, sig };
};
