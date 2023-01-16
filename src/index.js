import fruits from "./fruits";
import { choice, remove } from './helpers';

console.log(fruits)
const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`here you go: ${randomFruit}`);
console.log(`May I have another?`);

const remainingFruits = remove(fruits, randomFruit);
console.log(`I'm sorry, we're all out. We have ${remainingFruits.length} left`);