require("dotenv").config({ path: ".env.local" });

module.exports = {
  deepSeekApiKey: process.env.DEEPSEEK_API_KEY,
};
