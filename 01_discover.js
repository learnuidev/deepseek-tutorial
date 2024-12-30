const { discoverPrompt } = require("./01_discover_prompt");
const { openai } = require("./lib/deepseek");

const discover = ({ content, lang }) => {
  return openai.chat.completions
    .create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: `${discoverPrompt}
          
          Also the content is of the following language: ${lang}`,
        },
        { role: "user", content: `content: ${content}` },
      ],

      response_format: {
        type: "json_object",
      },
      max_tokens: 8192,
    })
    .then((chatCompletion) => {
      const content = chatCompletion?.choices?.[0]?.message?.content;

      return content;
    });
};

const lang = `zh`;
const content = `你`;
discover({ content, lang }).then((content) => {
  console.log("RESP", content);
  return content;
});
