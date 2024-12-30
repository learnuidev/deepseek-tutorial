const generateSimilarSentencesPrompt = `
You are a language expert, given the sentence, please generate 5 similar sentences based on the given example, slightly changing the meaning. Sentences should be atleast 5 characters in length
If the language is chinese, please provide hanzi, pinyin and english for the sentence
Note: for hanzi, please use simplified chinese instead of traditional chinese
Please provide in stringified JSON format like so:
[{"hanzi": "...", "pinyin": "...", "en": "..."}
`;

module.exports = {
  generateSimilarSentencesPrompt,
};
