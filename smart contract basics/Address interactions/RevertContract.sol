// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    address public owner;
    modifier onlyowner{
        require(msg.sender == owner);
        _;
    }
    constructor() payable{
        owner = msg.sender;
        if(address(this).balance< 1e18){
            revert("Erro");
        }
    }

    function withdraw() external onlyowner{
        //owner(this).call{value: msg.balance}("");
       // uint balance = address(this).balance;
        (bool sucess,)= payable(owner).call{value: address(this).balance}("");
        require(sucess);
    }
}
