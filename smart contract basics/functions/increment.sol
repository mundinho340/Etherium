
// Contract Functions

// Besides the constructor, contracts can define other functions which can be invoked by transactions or as queries.

//     Let's explore the differences of transactions and queries in details.

// The function syntax for Solidity looks quite familiar, coming from JavaScript! Let's see an example:

// function myFunction() external {
//     // do something!
// }

// Without the external visibility specifier here, this could be JavaScript code! The Solidity function syntax looks much the same aside from the keywords defining the function.

//     External visibility is quite similar to the public visibility for functions. External is better than public if you know that you are only calling the function externally (outside the EVM). Public visibility requires more gas because it can be called externally and internally, which complicates the assembly code.

// Your Goal: Increment x

// Let's build on your code from the previous stage!

//     Create an external function called increment that will add 1 to the state variable x.

//     Many of the shorthand operators we've become accustomed to in languages like JavaScript will also available in Solidity: -=, *=, /=, %=, |=, &=, ^=, ++ and --.


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint public x;
    constructor (uint value){
        x = value;
    }

    function increment() external {
        x+=1;
    }

    function add(uint value) external view returns(uint){
        return value+ x;
    }
}
