// const { generateSentencesPrompt } = require("./02_generate_sentences_prompt");
const {
  generateSimilarSentencesPrompt,
} = require("./03_genenerate_similar_sentences_prompr");
const { chat } = require("./lib/deepseek/chat");
const { parseString } = require("./utils/parse-string");

const generateSimilarSentences = ({ content, lang, ...rest }) => {
  return chat({
    messages: [
      {
        role: "system",
        content: `${generateSimilarSentencesPrompt}
          
          Also the content is of the following language: ${lang}`,
      },
      {
        role: "user",
        content: `content: ${content} ${JSON.stringify(rest)}`,
      },
    ],
    response_format: null,
    temperature: 1.3,
  });
};

const lang = `zh`;
// const content = `人工智能正在改变我们的生活`;
// const content = `人工智能技术在未来会有更大的发展`;
const content = `最后，我建议大家每天花15分钟左右的时间进行这样的练习`;
generateSimilarSentences({
  content,
  lang,
  // context: `Make this about travelling`,
  context: `Make this about learning chinese`,
})
  .then((content) => {
    return parseString(content);
  })
  .then((content) => {
    console.log("RESP", content);
  });

const resp = [
  {
    hanzi: "人工智能正在改变我们的世界",
    pinyin: "réngōng zhìnéng zhèngzài gǎibiàn wǒmen de shìjiè",
    en: "Artificial intelligence is changing our world",
    explanation:
      "This sentence emphasizes the impact of artificial intelligence on the world as a whole, suggesting a broader scope of influence.",
  },
  {
    hanzi: "人工智能正在改变我们的工作方式",
    pinyin: "réngōng zhìnéng zhèngzài gǎibiàn wǒmen de gōngzuò fāngshì",
    en: "Artificial intelligence is changing our way of working",
    explanation:
      "This sentence focuses on how artificial intelligence is transforming the way people work, highlighting changes in professional environments.",
  },
  {
    hanzi: "人工智能正在改变我们的学习方式",
    pinyin: "réngōng zhìnéng zhèngzài gǎibiàn wǒmen de xuéxí fāngshì",
    en: "Artificial intelligence is changing our way of learning",
    explanation:
      "This sentence highlights the impact of artificial intelligence on education and learning methods, suggesting a shift in how knowledge is acquired.",
  },
  {
    hanzi: "人工智能正在改变我们的沟通方式",
    pinyin: "réngōng zhìnéng zhèngzài gǎibiàn wǒmen de gōutōng fāngshì",
    en: "Artificial intelligence is changing our way of communication",
    explanation:
      "This sentence emphasizes how artificial intelligence is altering the ways in which people communicate, possibly through new technologies or platforms.",
  },
  {
    hanzi: "人工智能正在改变我们的未来",
    pinyin: "réngōng zhìnéng zhèngzài gǎibiàn wǒmen de wèilái",
    en: "Artificial intelligence is changing our future",
    explanation:
      "This sentence suggests that artificial intelligence is shaping the future, indicating long-term implications and transformations.",
  },
];

const content2 = `人工智能技术在未来会有更大的发展`;
const resp2 = [
  {
    hanzi: "人工智能技术将在未来取得更大的进步。",
    pinyin: "Réngōng zhìnéng jìshù jiāng zài wèilái qǔdé gèng dà de jìnbù.",
    en: "Artificial intelligence technology will make greater progress in the future.",
    explanation:
      "This sentence emphasizes the future advancements in artificial intelligence technology, suggesting significant improvements and developments.",
  },
  {
    hanzi: "未来，人工智能技术会有更大的突破。",
    pinyin: "Wèilái, réngōng zhìnéng jìshù huì yǒu gèng dà de tūpò.",
    en: "In the future, artificial intelligence technology will have greater breakthroughs.",
    explanation:
      "This sentence highlights the expectation of significant breakthroughs in artificial intelligence technology in the future.",
  },
  {
    hanzi: "人工智能技术在未来将会有更大的应用。",
    pinyin:
      "Réngōng zhìnéng jìshù zài wèilái jiāng huì yǒu gèng dà de yìngyòng.",
    en: "Artificial intelligence technology will have greater applications in the future.",
    explanation:
      "This sentence suggests that artificial intelligence technology will be more widely applied in various fields in the future.",
  },
  {
    hanzi: "未来，人工智能技术将会有更大的影响力。",
    pinyin:
      "Wèilái, réngōng zhìnéng jìshù jiāng huì yǒu gèng dà de yǐngxiǎnglì.",
    en: "In the future, artificial intelligence technology will have greater influence.",
    explanation:
      "This sentence indicates that artificial intelligence technology will have a more significant impact on society and various industries in the future.",
  },
  {
    hanzi: "人工智能技术在未来会有更大的创新。",
    pinyin: "Réngōng zhìnéng jìshù zài wèilái huì yǒu gèng dà de chuàngxīn.",
    en: "Artificial intelligence technology will have greater innovation in the future.",
    explanation:
      "This sentence suggests that there will be more innovative developments in artificial intelligence technology in the future.",
  },
];

// Note: Higher the Temperature, the more 'creative' the response becomes
const resp3WithoutTemperature = [
  {
    hanzi: "最后，我建议大家每天花10分钟左右的时间进行这样的练习",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 10 fēnzhōng zuǒyòu de shíjiān jìnxíng zhèyàng de liànxí",
    en: "Finally, I suggest everyone spend about 10 minutes a day on such practice.",
    explanation:
      "This sentence suggests a slightly shorter duration (10 minutes) for the daily practice compared to the original sentence.",
  },
  {
    hanzi: "最后，我建议大家每周花15分钟左右的时间进行这样的练习",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měi zhōu huā 15 fēnzhōng zuǒyòu de shíjiān jìnxíng zhèyàng de liànxí",
    en: "Finally, I suggest everyone spend about 15 minutes a week on such practice.",
    explanation:
      "This sentence changes the frequency from daily to weekly while keeping the same duration (15 minutes).",
  },
  {
    hanzi: "最后，我建议大家每天花20分钟左右的时间进行这样的练习",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 20 fēnzhōng zuǒyòu de shíjiān jìnxíng zhèyàng de liànxí",
    en: "Finally, I suggest everyone spend about 20 minutes a day on such practice.",
    explanation:
      "This sentence suggests a slightly longer duration (20 minutes) for the daily practice compared to the original sentence.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间进行类似的练习",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān jìnxíng lèisì de liànxí",
    en: "Finally, I suggest everyone spend about 15 minutes a day on similar practice.",
    explanation:
      "This sentence uses the term 'similar' instead of 'such', implying that the practice is of a similar nature but not exactly the same.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间进行这样的活动",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān jìnxíng zhèyàng de huódòng",
    en: "Finally, I suggest everyone spend about 15 minutes a day on such activities.",
    explanation:
      "This sentence changes 'practice' to 'activities', broadening the scope of what is being suggested.",
  },
];

const resp3WithTemperature = [
  {
    hanzi: "最后，我建议每天花15分钟进行这种练习。",
    pinyin:
      "Zuìhòu, wǒ jiànyì měitiān huā shíwǔ fēnzhōng jìnxíng zhè zhǒng liànxí.",
    en: "Finally, I suggest spending 15 minutes each day on this kind of practice.",
    explanation:
      "This sentence suggests a daily routine of 15 minutes for a specific type of practice, emphasizing consistency.",
  },
  {
    hanzi: "我建议大家每天花15分钟进行类似的练习。",
    pinyin:
      "Wǒ jiànyì dàjiā měitiān huā shíwǔ fēnzhōng jìnxíng lèisì de liànxí.",
    en: "I suggest everyone spend 15 minutes each day on similar practice.",
    explanation:
      "This sentence broadens the suggestion to everyone, recommending a similar daily practice of 15 minutes.",
  },
  {
    hanzi: "每天花15分钟进行这种练习，我建议大家可以试试。",
    pinyin:
      "Měitiān huā shíwǔ fēnzhōng jìnxíng zhè zhǒng liànxí, wǒ jiànyì dàjiā kěyǐ shì shì.",
    en: "Spending 15 minutes each day on this kind of practice, I suggest everyone give it a try.",
    explanation:
      "This sentence encourages trying out the suggested daily practice of 15 minutes.",
  },
  {
    hanzi: "我建议大家每天花15分钟进行这样的练习，效果会很好。",
    pinyin:
      "Wǒ jiànyì dàjiā měitiān huā shíwǔ fēnzhōng jìnxíng zhèyàng de liànxí, xiàoguǒ huì hěn hǎo.",
    en: "I suggest everyone spend 15 minutes each day on this kind of practice, the effect will be great.",
    explanation:
      "This sentence emphasizes the positive outcome of the suggested daily practice.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟进行这种练习，对提升很有帮助。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā shíwǔ fēnzhōng jìnxíng zhè zhǒng liànxí, duì tíshēng hěn yǒu bāngzhù.",
    en: "Finally, I suggest everyone spend 15 minutes each day on this kind of practice, it is very helpful for improvement.",
    explanation:
      "This sentence highlights the benefit of the suggested daily practice for personal improvement.",
  },
];

const response3WithTemperateAndContext = [
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间规划旅行。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān guīhuà lǚxíng.",
    en: "Finally, I suggest everyone spend about 15 minutes each day planning their travels.",
    explanation:
      "This sentence suggests a daily practice of spending 15 minutes to plan travels, emphasizing the importance of preparation for trips.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间研究旅行目的地。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān yánjiū lǚxíng mùdìdì.",
    en: "Finally, I suggest everyone spend about 15 minutes each day researching travel destinations.",
    explanation:
      "This sentence encourages daily research into potential travel destinations, focusing on gathering information to make informed travel choices.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间查看旅行优惠。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān chákàn lǚxíng yōuhuì.",
    en: "Finally, I suggest everyone spend about 15 minutes each day checking for travel deals.",
    explanation:
      "This sentence advises a daily routine of looking for travel deals, highlighting the potential savings and benefits of being up-to-date with travel offers.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间学习旅行语言。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān xuéxí lǚxíng yǔyán.",
    en: "Finally, I suggest everyone spend about 15 minutes each day learning the language of their travel destination.",
    explanation:
      "This sentence promotes the idea of learning the local language of a travel destination daily, emphasizing the importance of communication skills in enhancing travel experiences.",
  },
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间整理旅行照片。",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān zhěnglǐ lǚxíng zhàopiàn.",
    en: "Finally, I suggest everyone spend about 15 minutes each day organizing travel photos.",
    explanation:
      "This sentence suggests a daily habit of organizing travel photos, focusing on preserving and managing memories from trips effectively.",
  },
];

const response3WithTemplateAndContextWithoutExplanation = [
  {
    hanzi: "最后，我建议大家每天花15分钟左右的时间学习中文",
    pinyin:
      "Zuìhòu, wǒ jiànyì dàjiā měitiān huā 15 fēnzhōng zuǒyòu de shíjiān xuéxí Zhōngwén",
    en: "Finally, I suggest everyone spend about 15 minutes a day learning Chinese",
  },
  {
    hanzi: "我建议大家每天用15分钟来练习中文",
    pinyin: "Wǒ jiànyì dàjiā měitiān yòng 15 fēnzhōng lái liànxí Zhōngwén",
    en: "I suggest everyone spend 15 minutes a day practicing Chinese",
  },
  {
    hanzi: "每天花15分钟学习中文是个好习惯",
    pinyin: "Měitiān huā 15 fēnzhōng xuéxí Zhōngwén shì gè hǎo xíguàn",
    en: "Spending 15 minutes a day learning Chinese is a good habit",
  },
  {
    hanzi: "我推荐大家每天用15分钟来提升中文水平",
    pinyin:
      "Wǒ tuījiàn dàjiā měitiān yòng 15 fēnzhōng lái tíshēng Zhōngwén shuǐpíng",
    en: "I recommend everyone spend 15 minutes a day improving their Chinese",
  },
  {
    hanzi: "每天坚持15分钟的中文学习会有很大进步",
    pinyin:
      "Měitiān jiānchí 15 fēnzhōng de Zhōngwén xuéxí huì yǒu hěn dà jìnbù",
    en: "Persisting with 15 minutes of Chinese learning every day will lead to great progress",
  },
];
