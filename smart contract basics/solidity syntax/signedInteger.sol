// Signed Integers

// Now that we know what an unsigned integer is, let's take a look at a signed integer.

// A signed integer can be declared with the keyword int. Just like uint, the keyword int is short for a data type that will store 256 bits of memory, int256.

// Since a integer is signed, the range covers both negative and positive numbers. Let's compare the range of a uint8 to an int8:

//     uint8: Ranges from 0 to 255
//     int8: Ranges from -128 to 127

// Notice that both ranges cover a total of 256 values, which is the total number of possible values that can be expressed with 8 bits.
// Your Goal: Create Signed Integers!

//     Create three public state integers a, b, and difference.

//     Declare the variables a and b as int8. One of the values must be positive, the other must be negative.

//     Declare the variable difference as a int16 which is the absolute difference between a and b.

//     You can get the absolute difference simply by subtracting the negative number from the positive number. For instance, for the values 10 and -15, the absolute difference would be 25 which is 10 - -15.


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    int8 public a=4;
    int8 public b=-1;
    int16 public difference = a-b;
}
