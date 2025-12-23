const ImageKit = require("imagekit");

const storageInstance = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

const uploadFileToIMAGEKIT = async (file, fileName) => {
  return await storageInstance.upload({
    file,
    fileName,
    folder: "hm",
  });
};

module.exports = {
  storageInstance,
  uploadFileToIMAGEKIT,
};
