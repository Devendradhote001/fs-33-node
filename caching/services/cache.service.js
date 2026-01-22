const Redis = require("ioredis");

const cacheInstance = new Redis({
  host: "redis-17735.c305.ap-south-1-1.ec2.cloud.redislabs.com",
  port: 17735,
  password: "i3aWmdruake2McOxBQRcDyEKeSxXRk4F",
});

module.exports = cacheInstance;
