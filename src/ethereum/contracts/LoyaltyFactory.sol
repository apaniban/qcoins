pragma solidity ^0.4.20;

interface token {
  function transferFrom(address from, address to, uint amount) external;
  function transfer(address to, uint amount) external;
  function giveAccess(address to) external;
}

contract QLoyaltyFactory {
  address public qCoins;
  address public qLoyalty;

  constructor(uint initialSupply) public {
    qCoins = new QCoins(initialSupply, msg.sender);
    qLoyalty = new QLoyalty(qCoins, msg.sender);
  }
}

contract QCoins {
  address public owner;
  string public name;
  string public symbol;
  uint256 public totalSupply;

  mapping (address => uint256) public balanceOf;
  mapping (address => bool) public canTransfer;

  constructor(uint256 initialSupply, address _owner) public {
    owner = _owner;
    totalSupply = initialSupply;
    balanceOf[owner] = totalSupply;
    canTransfer[owner] = true;
    name = "QCoins";
    symbol = "QF";
  }

  function _transfer(address _from, address _to, uint256 _value) internal {
    require(balanceOf[_from] >= _value);

    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    require(canTransfer[msg.sender]);

    _transfer(_from, _to, _value);

    return true;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
    _transfer(msg.sender, _to, _value);

    return true;
  }

  function giveAccess(address _to) public {
    require(canTransfer[msg.sender]);

    canTransfer[_to] = true;
  }
}

contract QLoyalty {
  address public owner;
  token public qCoins;

  address[] public partners;

  constructor(address _tokenAddress, address _owner) public {
    qCoins = token(_tokenAddress);
    owner = _owner;
  }

  function createPartner(string _name) public {
    address partner = new Partner(msg.sender, qCoins, _name);
    qCoins.giveAccess(partner);
    partners.push(partner);
  }

  function getPartners() public view returns (address[]) {
    return partners;
  }

  function rewardCustomer(address customer, uint amount) public {
    qCoins.transferFrom(owner, customer, amount);
  }
}

contract Partner {
  address public owner;
  token public qCoins;
  string public name;
  uint public noOfProducts;
  mapping (uint => Product) products;

  struct Product {
    string name;
    uint price;
  }

  constructor(address _owner, token tokenAddress, string partnerName) public {
    owner = _owner;
    qCoins = token(tokenAddress);
    name = partnerName;
  }

  function getPartnerInfo() public view returns (address, string) {
    return (this, name);
  }

  function createProduct(string productName, uint price) public {
    require(msg.sender == owner);

    Product memory product = Product({
      name: productName,
      price: price
    });

    products[++noOfProducts] = product;
  }

  function getProduct(uint productIndex) public view returns (string, uint) {
    Product memory product = products[productIndex];

    return (product.name, product.price);
  }

  function redeem(uint productIndex) public returns (bool success) {
    Product memory product = products[productIndex];

    qCoins.transferFrom(msg.sender, owner, product.price);

    return true;
  }
}
