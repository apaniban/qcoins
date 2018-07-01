const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/QLoyaltyFactory.json');

const provider = new HDWalletProvider(
  'romance manage version grain finger pioneer double jar cotton demise monitor laundry',
  'https://rinkeby.infura.io/115dH9HNIiXhpQRc4cvo'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode, arguments: [5000000] })
    .send({ gas: '3000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
