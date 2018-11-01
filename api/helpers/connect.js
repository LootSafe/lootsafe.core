const { provider } = require('../../config');
const chalk = require('chalk');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

console.log(chalk.green('🔌 connected to provider:'), chalk.white(provider));

/**
 * Connect to a contract by address
 * @function
 * @param abi the abi of the contract
 * @param address the address of the contract
 * @returns a web3 instance of the supplied abi at the supplied address
 */
module.exports = function (abi, address) {
    return new web3.eth.Contract(abi, address);
};

