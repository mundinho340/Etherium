pragma solidity ^0.8.4;

contract Contract {
    function sumAndAverage(uint num1, uint num2, uint num3, uint num4) pure external returns(uint, uint){
        uint sum =num1+num2+num3+num4;
        uint average = sum/4;
        return (sum, average);
    }
}
