import web3 from './web3';
import QCoins from './build/QCoins.json';

const instance = new web3.eth.Contract(
  JSON.parse(QCoins.interface),
  '0xceE394e62096173C6b7F191AB958CC987FB1BDEB'
);

export default instance;
