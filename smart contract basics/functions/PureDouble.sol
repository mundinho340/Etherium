// Pure Functions

// Occasionally there is the necessity for Solidity functions that neither read from nor write to state. These functions can be labeled as pure.

// Let's say we wanted to add together two uint values:

// function double(uint x, uint y) external pure returns(uint) {
//     return x + y;
// }

// This function is just performing simple arithmetic without reading/writing state so we can label it pure.

//     If we tried attempted to modify state in a pure function the compiler would throw an error along the lines of "Function declared as pure, but this expression (potentially) modifies the state".

// There's also an alternative syntax for returning values in Solidity:

// function double(uint x, uint y) external pure returns(uint sum) {
//     sum = x + y;
// }

// Woah, that's new.

// In the returns keyword we specified the name of the returned parameter sum. Then we assigned the x + y to sum inside our function body. The value of sum is implicitly returned.

//     A bit of a change-up from what we're used to from JavaScript! This return style is perfectly valid Solidity and quite often used.

// Your Goal: Double Uint

//     Create an external, pure function called double which takes a uint parameter and doubles it. It should return this doubled uint value.


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    function double(uint value) public pure returns(uint doubles){
        return doubles= value*2;
    }

    function double(uint value, uint val) external pure returns(uint, uint){
         
        return (double(value), double(val));
    }
}
