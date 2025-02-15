// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    address public owner;
    address public charity;
    constructor(address _charity){
        owner =msg.sender;
        charity = _charity;
        
    }

    function tip() external payable {
        (bool s,) = owner.call{value: msg.value}("");
        require(s);
    }

    function donate () external {
        charity.call{value: address(this).balance}("");

        selfdestruct(payable(msg.sender));
    }

    receive() payable external {
        
    }
}

