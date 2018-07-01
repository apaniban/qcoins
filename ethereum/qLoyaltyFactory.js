import web3 from './web3';
import QLoyaltyFactory from './build/QLoyaltyFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(QLoyaltyFactory.interface),
  '0x839d9e3afC4FDdBD3214084aaF3c17444c014385'
);

export default instance;
