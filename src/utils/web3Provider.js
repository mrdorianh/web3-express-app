const { Web3 } = require('web3');
const { HttpProvider } = require('web3-providers-http');

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

// Check if INFURA_PROJECT_ID is set
if (!INFURA_PROJECT_ID) {
  throw new Error('INFURA_PROJECT_ID is not set in the environment variables');
}

const provider = new HttpProvider(
  `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`
);

// Consider using WebSocket provider for better real-time performance
// const WebsocketProvider = require('web3-providers-ws');
// const provider = new WebsocketProvider(`wss://mainnet.infura.io/ws/v3/${INFURA_PROJECT_ID}`);

const web3 = new Web3(provider);

module.exports = web3;
