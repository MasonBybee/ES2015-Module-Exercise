import { choice, remove } from "./helpers";
import Foods from "./Foods";

const randomFruit = choice(Foods);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

remove(Foods, randomFruit);

console.log(`I'm sorry, we're all out. We have ${Foods.length} left`);
