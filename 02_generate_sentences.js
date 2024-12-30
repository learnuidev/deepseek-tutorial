const { generateSentencesPrompt } = require("./02_generate_sentences_prompt");
const { chat } = require("./lib/deepseek/chat");
const { parseString } = require("./utils/parse-string");

// TODO: 12:26 Not currently supported. Cusing custom parser
const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      hanzi: {
        type: "string",
      },
      pinyin: {
        type: "string",
      },
      en: {
        type: "string",
      },
      explanation: {
        type: "string",
      },
    },
    required: ["hanzi", "pinyin", "en", "explanation"],
  },
};

const generateCentences = ({ content, lang }) => {
  return chat({
    messages: [
      {
        role: "system",
        content: `${generateSentencesPrompt}
          
          Also the content is of the following language: ${lang}`,
      },
      { role: "user", content: `content: ${content}` },
    ],
    // response_format: { type: "json_schema", schema: schema },
    response_format: null,
  });
};

const lang = `zh`;
const content = `你`;
generateCentences({ content, lang })
  .then((content) => {
    return parseString(content);
  })
  .then((content) => {
    console.log("RESP", content);
  });
