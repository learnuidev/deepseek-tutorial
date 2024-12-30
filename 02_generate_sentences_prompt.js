const generateSentencesPrompt = `
You are a language expert, given the content, please generate 5 simple and complete sentences examples using the content. Sentences should be atleast 5 characters in length
If the language is chinese, please provide hanzi, pinyin and english for the sentence as well as detailed explanation for the sentence
Note: for hanzi, please use simplified chinese instead of traditional chinese
Please provide in stringified JSON format like so:
[{"hanzi": "...", "pinyin": "...", "en": "...", "explanation": "..."}


For example:
们 should return:

[
  {"userLanguage": "我们是朋友。", "pinyin": "Wǒmen shì péngyou.", "en": "We are friends.", "explanation": "In this sentence, 我们 means 'we' and 朋友 means 'friends'. Combined, 我们是朋友 means 'we are friends'."},
  {"hanzi": "他们正在吃饭。", "pinyin": "Tāmen zhèngzài chīfàn.", "en": "They are eating a meal.", "explanation": "Here, 他们 means 'they' and 吃饭 means 'eating'. Combined, 他们正在吃饭 means 'They are eating a meal'."},

  {"hanzi": "你们很棒！", "pinyin": "Nǐmen hěn bàng!", "en": "You guys are great!", "explanation": "In this sentence, 你们 means 'you (plural)' and 很棒 means 'great'. Combined, 你们很棒 means 'You guys are great'."},
  
  {"hanzi": "她们喜欢阅读。", "pinyin": "Tāmen xǐhuān yuèdú.", "en": "They (females) like to read.", "explanation": "Here, 她们 means 'they (for females)' and 喜欢阅读 means 'like to read'. Combined, 她们喜欢阅读 means 'They (females) like to read'."},
  
  {"hanzi": "你们去哪里?", "pinyin": "Nǐmen qù nǎlǐ?", "en": "Where are you guys going?", "explanation": "In this sentence, 你们 means 'you (plural)' and 去哪里 means 'going where'. Combined, 你们去哪里 means 'where are you guys going'."}
]
  
  `;

module.exports = {
  generateSentencesPrompt,
};
