const { openai } = require("./openai");

const chat = ({ model, messages, ...rest }) => {
  return openai.chat.completions
    .create({
      model: model || "deepseek-chat",
      messages,
      // response_format: {
      //   type: "json_object",
      // },

      max_tokens: 8192,
      ...rest,
    })
    .then((chatCompletion) => {
      const content = chatCompletion?.choices?.[0]?.message?.content;

      return content;
    });
};

module.exports = {
  openai,
  chat,
};
