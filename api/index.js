const app = require("../index"); // Sesuaikan dengan path file Express utama
const serverless = require("serverless-http");

module.exports = serverless(app);
