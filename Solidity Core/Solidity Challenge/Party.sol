// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Party {
    uint public value;
    mapping(address => bool) members;
	constructor(uint val){
        value = val;
    }

    function rsvp() external payable{
         require(msg.value == value, "Valor insuficiente");
         require(!members[msg.sender], "endereco ja validado");

         members[msg.sender] =true;

    }
}
