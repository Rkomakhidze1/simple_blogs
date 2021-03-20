const AWS = require("aws-sdk");
const keys = require("../config/keys");
const uuid = require("uuid");

AWS.config.update({ region: "eu-central-1" });
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
});

module.exports = (app) => {
  app.get("/api/upload", (req, res) => {
    const key = `${req.user.id}/${uuid()}`;

    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "blog-bucket-1131",
        ContentType: "image/jpeg",
        Key: key,
      },
      (err, url) => {
        res.status(200).json({ key, url });
      }
    );
  });
};
