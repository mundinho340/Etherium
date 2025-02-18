// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Party {
    uint256 public value;
    mapping(address => bool) public members;
    bool public paybill;
    address[] public memberHash;

    event RSVPed(address indexed member);
    event BillPaid(address indexed venue, uint256 amount);
    event FundsDistributed(uint256 amountPerMember);

    constructor(uint256 _value) {
        value = _value;
        paybill = false;
    }

    function rsvp() external payable {
        require(msg.value == value, "Valor insuficiente");
        require(!members[msg.sender], "Endereco ja validado");

        members[msg.sender] = true;
        memberHash.push(msg.sender);

        emit RSVPed(msg.sender);
    }

    function payBill(address payable venue, uint256 amount) external {
        require(!paybill, "Conta ja foi paga");
        require(address(this).balance >= amount, "Saldo insuficiente");
        require(memberHash.length > 0, "Nenhum usuario para dividir a conta");

        (bool sent, ) = venue.call{value: amount}("");
        require(sent, "Falha ao pagar o local!");

        paybill = true;
        emit BillPaid(venue, amount);

        uint256 restValue = address(this).balance;
        uint256 amountPerMember = restValue / memberHash.length;

        for (uint256 i = 0; i < memberHash.length; i++) {
            (bool success, ) = payable(memberHash[i]).call{value: amountPerMember}("");
            require(success, "Falha ao enviar fundos ao membro!");
        }

        emit FundsDistributed(amountPerMember);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
