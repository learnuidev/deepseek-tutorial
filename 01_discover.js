const { discoverPrompt } = require("./01_discover_prompt");
const { chat } = require("./lib/deepseek/chat");

const discover = ({ content, lang }) => {
  return chat({
    messages: [
      {
        role: "system",
        content: `${discoverPrompt}
        
        Also the content is of the following language: ${lang}`,
      },
      { role: "user", content: `content: ${content}` },
    ],
  });
};

// const lang = `zh`;
// const content = `你`;
// discover({ content, lang }).then((content) => {
//   console.log("RESP", content);
//   return content;
// });
