const OpenAI = require("openai");
const { deepSeekApiKey } = require("../../config");

const openai = new OpenAI({
  apiKey: deepSeekApiKey,
  baseURL: "https://api.deepseek.com",
});

module.exports = {
  openai,
};
