pragma solidity ^0.4.20;

interface token {
  function transfer(address receiver, uint amount) external;
  function transferFrom(address from, address to, uint amount) external;
}

contract Partner {
  address public owner;
  address public loyaltyAddress;
  string public name;
  string public description;
  address[] public products;
  token public tokenReward;

  modifier restricted {
    require(owner == msg.sender);
    _;
  }

  constructor(string _name, string _description, address _owner, address _tokenAddress) public {
    name = _name;
    description = _description;
    owner = _owner;
    tokenReward = token(_tokenAddress);
  }

  function createProduct(string productName, string productDescription, uint256 productPrice) public restricted {
    address product = new Product(productName, productDescription, productPrice, tokenReward, owner);

    products.push(product);
  }

  function getProducts() public view returns (address[]) {
    return products;
  }
}

contract Product {
  address public partner;
  string public name;
  string public description;
  uint256 public price;
  token public tokenReward;

  constructor(string _name, string _description, uint256 _price, token _tokenReward, address _partner) public {
    name = _name;
    description = _description;
    price = _price;
    tokenReward = _tokenReward;
    partner = _partner;
  }

  function redeem() public returns (success bool) {
    tokenReward.transfer(partner, price);

    return true;
  }

}
