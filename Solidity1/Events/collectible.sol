// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    event Deployed(address indexed _add);
    event ForSale(uint price, uint currentBlock);
    event Transfer(address indexed, address indexed);
    event Purchase(uint amount, address indexed _add);
    address owner;
    address public seller;
    address public buyer;
    constructor(){
        owner = msg.sender;
        emit Deployed(msg.sender);
    }

    modifier onlyOwner{
        require(owner ==msg.sender, "Erro meu camarada.");
        _;
    }

    function transfer(address recipient) external {
        require(owner == msg.sender, "Sorry only the ownership should be modifier this function");
        require(owner != recipient,"Erro");
        emit Transfer(owner, recipient);
        owner =recipient;
    }

    function markPrice(uint price) external onlyOwner {
        emit ForSale(price, block.timestamp);
    } 

    function purchase() external payable{
        seller.call{value:msg.value};
        owner = buyer;
        emit Purchase(msg.value, buyer);
    }


}
