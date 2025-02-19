// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Token {
    uint public totalSupply;
    string public name = "Moeda Electronica Descentralizada Exclusive";
    string public symbol ="MEDX";
    uint8 public decimals = 18;
    mapping(address => uint) public balance;
    function balanceOf(address _address) external view returns(uint){
        return balance[_address];
    }
}
