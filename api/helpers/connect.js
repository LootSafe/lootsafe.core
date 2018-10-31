const { provider } = require('../../config');
const chalk = require('chalk');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

console.log(chalk.green('🔌 connected to provider:'), chalk.white(provider));

module.exports = function (abi, address) {
    return new web3.eth.Contract(abi, address);
};

