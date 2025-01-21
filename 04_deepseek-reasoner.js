const { chat } = require("./lib/deepseek/chat");

chat({
  messages: [
    {
      role: "system",
      content: `solve the given problem, using both math and non-routine logic`,
    },
    {
      role: "user",
      content: `problem: There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs &nbsp;and 150 heads in the barn?`,
    },
  ],
  model: "deepseek-reasoner",
}).then((resp) => {
  console.log("Reasoned", resp);
});
