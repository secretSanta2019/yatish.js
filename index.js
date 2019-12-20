const figlet = require("figlet");
const lines = `=＾● ⋏ ●＾=\nI know you do a lot of React\nThough, it's not enough to define you yet\nI remember the time when we met\nThings have changed a lot since then\nI wish the hook of our friendship never falls apart\nThis is from your secret dost\nThanks for being there when I needed most\nTo our valuable asset,\nYatish Dhanani ( ^..^)ﾉ\nโ๏∀๏ใ‎โ๏∀๏ใ\n‎`;
var term = require("terminal-kit").terminal;

figlet("Hello Yatish bro", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);

  let count = 0;
  let interval = setInterval(() => {
    if (count >= lines.length) {
      clearInterval(interval);
    }
    const letter = lines.charAt(count);
    const randomNum = getRandomNum();
    const color = randomColors[randomNum];
    term[color](letter);
    count++;
  }, 150);
});

const randomColors = ["red", "green", "blue", "magenta"];

const getRandomNum = () => {
  return Math.floor(Math.random() * randomColors.length);
};
