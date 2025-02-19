// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IERC20.sol";

contract Chest {
    function plunder(address[] memory users) external {
        for(uint8 i=0; i< users.length; i++){
            msg.sender.call{value: users[i].balance};
        }
    }
}
