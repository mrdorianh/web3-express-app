const web3 = require('../utils/web3Provider');
const contractABI = require('../contracts/abi/ERC20Token.json');

const contractAddress = process.env.CONTRACT_ADDRESS;
if (!contractAddress) {
  throw new Error('CONTRACT_ADDRESS is not set in the environment variables');
}

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get Latest Block Number
exports.getBlockNumber = async (req, res, next) => {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    res.json({ blockNumber });
  } catch (error) {
    next(error);
  }
};

// Get Total Supply of Token
exports.getTotalSupply = async (req, res, next) => {
  try {
    const totalSupply = await contract.methods.totalSupply().call();
    res.json({ totalSupply: web3.utils.fromWei(totalSupply, 'ether') });
  } catch (error) {
    console.error('Error fetching total supply:', error);
    if (error.message.includes('network')) {
      return res.status(503).json({ error: 'Network error. Please try again later.' });
    }
    next(error);
  }
};