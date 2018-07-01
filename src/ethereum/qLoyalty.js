import web3 from './web3';
import QLoyalty from './build/QLoyalty.json';

const instance = new web3.eth.Contract(
  JSON.parse(QLoyalty.interface),
  '0x5e45ab5559975672e58cFd3492A67B65C81eDa83'
);

export default instance;
