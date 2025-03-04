
sudo su 
sudo apt 
contract pay{
  function createUser(address _add) external view {
    _add.call{value: msg.value}("")
  }
}
