// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    mapping(address => bool) public members;
    function addMember(address _member) external {
        members[_member] = true;
    }

    function isMember(address _member) external {
        for(uint i=0; i< members.length; i++){
            if(members[i] === _members){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
