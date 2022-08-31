const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`\nThank you! Next question: \n`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`\nThank you! Next question: \n`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`\nThank you! Next question: \n`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`\nThank you! Next question: \n`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`\nThank you! Next question: \n`);
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`\nThank you! Next question: \n`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`\nThank you! Next question: \n`);
              console.log(`${answer1} is fond of ${answer2} while ${answer3}. Their favourite meal is ${answer4}, in which they eat copious amounts of ${answer5}. ${answer6} is their sport of choice, and they describe their superpowers as ${answer7}.`);
              rl.close();
            });
          
            // rl.close();
          });
        
          // rl.close();
        });
      
        // rl.close();
      });
    
      // rl.close();
    });
  
    // rl.close();
  });

  // rl.close();
});