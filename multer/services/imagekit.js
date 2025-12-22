const ImageKit = require("imagekit");

const imagekitInstance = new ImageKit({
  publicKey: "public_if30Suh/PyVqi82GHngC3Vku9UI=",
  privateKey: "private_y6aY9v1vTZf6OgF0INjmTZ03DyA=",
  urlEndpoint: "https://ik.imagekit.io/asdfghjklqwertyuiop",
});

const sendFilesToIK = async (buffer, fileName) => {
  return await imagekitInstance.upload({
    buffer,
    fileName,
    folder: "hm",
  });
};

module.exports = {
  imagekitInstance,
  sendFilesToIK,
};
