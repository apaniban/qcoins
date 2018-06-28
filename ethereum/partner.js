import web3 from './web3';
import Partner from './build/Partner.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Partner.interface), address);
};
