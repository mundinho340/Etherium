// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Token {
    uint public totalSupply;
    string public name = "Moeda Electronica Descentralizada";
    string public symbol ="MED";
    uint8 public decimals = 18;
    mapping(address => uint) public balance;
    constructor (){
        totalSupply = 1000 *10**decimals;
        balance[msg.sender] = totalSupply;
    }
    function balanceOf(address _address) external view returns(uint){
        return balance[_address]; 
    }

    function transfer(address recipient, uint amount) public  returns (bool){
        require(balance[msg.sender]>=amount, "Saldo insuficiente");
        balance[msg.sender]-=amount;
        balance[recipient]+=amount;
        return true;
    }


}
