interface token {
  function transfer(address receiver, uint amount) external;
  function transferFrom(address from, address to, uint amount) external;
}

contract Loyalty {
  address public owner;
  address public tokenAddress;
  token public tokenReward;
  string public name;
  address[] public approvedPartners;
  address[] public partners;
  mapping(address => bool) isApprovedPartner;

  modifier restricted {
    require(owner == msg.sender);
    _;
  }

  constructor(address _tokenAddress, string _name) public {
    tokenReward = token(tokenAddress);
    tokenAddress = _tokenAddress;
    name = _name;
    owner = msg.sender;
  }

  function createPartner(string _name, string _description) public {
    address partner = new Partner(_name, _description, msg.sender, tokenAddress);

    partners.push(partner);
  }

  function approvePartner(uint index) public restricted {
    address partner = partners[index];

    require(!isApprovedPartner[partner]);

    isApprovedPartner[partner] = true;
    approvedPartners.push(partner);
  }

  function getApprovedPartners() public view returns (address[]) {
    return approvedPartners;
  }

  function getPartners() public view returns (address[]) {
    return partners;
  }

  function rewardCustomer(address customer, uint amount) public restricted {
    tokenReward.transferFrom(owner, customer, amount);
  }
}
