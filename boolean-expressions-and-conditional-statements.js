/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
if (choice === "mountains") {
    if (hasTorch && hasCompass) {
        console.log("With your torch and compass, you successfully cross the peaks!");
    } else if (hasTorch || hasCompass) {
        console.log("You make it halfway, but you have no tools.");
    } else {
        console.log("It's too dark and confusing. You turn back.");
    }
}
else if (choice === "village") {
    if (hasMap || hasCompass) {
        console.log("You easily navigate the winding roads to the village.");
    } else {
        console.log("The village is hidden. You wander until you find a path back home.");
    }
} 

else if (choice === "cave") {
    console.log("It is pitch black and you hear growling...");
    if (hasTorch) {
        console.log("You light your torch and see a beast!");
        if (hasSword) {
            console.log("You defeat the beast and find a hidden treasure!");
        } else {
            console.log("You have no weapon! You run away adn fall into a ditch game over!");
        }
    } else {
        console.log("Without a torch, you stumble and fall into a pit. Game over!");
    }
} 
// Default case
else {
    console.log("That path doesn't exist. You stay where you are."); 
}