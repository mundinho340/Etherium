// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    event Deployed(address _add);
    address owner;
    event Transfer(address, address);
    constructor(){
        owner = msg.sender;
        emit Deployed(msg.sender);
    }

    function transfer(address recipient) external {
        require(owner == msg.sender, "Sorry only the ownership should be modifier this function");
        require(owner != recipient,"Erro");
        emit Transfer(owner, recipient);
        owner =recipient;
    }


}
