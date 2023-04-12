const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! What\'s your name? (Nicknames are also acceptable)', (name) => {
  // console.log(`Hello ${name}!`);

  rl.question('What\'s an activity you like to do?', (activity) => {
    // console.log(`Wow, ${activity} sounds like a lot of fun!`);

    rl.question('What kind of music do you like to listen to?', (music) => {
      // console.log(`${music} is the best kind of music.`);

      rl.question('Which meal is your favourite? (Ex. dinner, brunch. etc.)', (meal) => {
        // console.log(`${meal} is my favourite too!`);

        rl.question('What is your favourite food to eat for that meal?', (food) => {
          // console.log(`${food} sounds delicious!`);

          rl.question('What is your superpower? In a few words, tell us what you\'re amazing at!', (superpower) => {
            // console.log(`I wish I were amazing at ${superpower}`);

  rl.close();

  console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, and is amazing at ${superpower}`);


})})})})})});


