// Enum Type

// The Enum Type helps us write clean code!

// Consider this example:

// if(player.movement == 0) {
//     // player is moving up
// }
// else if(player.movement == 1) {
//     // player is moving left
// }

// Those comments are helpful, but they aren't exactly a foolproof plan! The movement number is being generated somewhere else in the code. If that ever changed, it would break our code!

// Plus, without the comments, there would be no way to tell which direction is which!

// An enum can clean this up! Let's see:

// enum Directions = { Up, Left, Down, Right }
// if(player.movement == Directions.Up) {

// }
// else if(player.movement == Directions.Left) {
    
// }

// Much cleaner!

// Not only are the numbers replaced with clear directions, we also have a structure for defining all our directions. We can share this structure, Directions, with other contracts to ensure that if the numbers change they won't break the rest of the code!

//     Underneath the hood, enum values are stored as unsigned integers. If there are less than 256 values, it will be stored as a uint8. If you have more than 256 values it will use a uint16 and will grow from there as needed (although I'm not sure how many contracts will ever need more than 65536 values in their enum...). The way this data is stored will become more important when we look to parse our smart contracts from the outside world through the ABI.

// Your Goal: Make Some Food!

// In the enum provided you'll see there are four types of Foods!

// Take the values and store them in food1, food2, food3, and food4!

//     Feel free to pick your own favorite foods and add them to the list and food values as well!
  
  
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    enum Foods { Apple, Pizza, Bagel, Banana }

	Foods public food1 = Foods.Apple;
	Foods public food2 = Foods.Banana;
	Foods public food3 = Foods.Bagel;
	Foods public food4 = Foods.Pizza;
}
