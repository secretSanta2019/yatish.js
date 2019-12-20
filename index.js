#! /usr/bin/env node
const figlet = require("figlet");
const lines = `
GET /intro
status 200 ok

‎=＾● ⋏ ●＾=\n
I know you do a lot of React (o ^▽^ o)\n
Though, it's not enough to define you yet Σ(O_O)\n
I remember the time when we met\n
Things have changed a lot since then\n
I wish the hook of our friendship never falls apart\n
This is from your secret dost ＼(＾∀＾)メ(＾∀＾)ノ\n
Thanks for being there when I needed you most (＾▽＾)\n
To our valuable asset,\nYatish Dhanani (=^ ◡ ^=) ﾉ\n
=＾● ⋏ ●＾=\n‎

GET /gift\n
status 404 Not found\n

Bug reported to Santa by QA from Santa Consultancies pvt. ltd. \n
Santa debugs...\n
Cause: Lack of time (20%) and procrastination (80%)\n
He feels guilty to let his beloved child down (シ. .)シ\n
Santa's delivery estimation - 25th Dec 2019 at your office \n

to be continued... (^_<)\n
(⊙_⊙) crashes gracefully...\n

`;

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
  }, 180);
});

const randomColors = ["red", "green", "blue", "magenta"];

const getRandomNum = () => {
  return Math.floor(Math.random() * randomColors.length);
};
