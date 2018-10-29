const connect = require('../connect');
const { provider, contracts, defaultAccount, gas } = require('../../../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

/**
 * Create a new asset
 * @route
 */
module.exports = (symbol = 'DRAW', name = 'Philanthropy Draw', identifier = 'pdraw') => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return new Promise((resolve, reject) => {
       connect(registry.abi, contracts.registry)
        .methods
        .create(symbol, name, web3.utils.toHex(identifier))
        .send({ from: defaultAccount, gas })
        .on('transactionHash', (hash) => {
            resolve(hash);
            console.log('transactionHash', hash);
        })
        .on('receipt', (receipt) => {
            console.log('receipt', receipt);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log('confirmation', confirmationNumber, receipt);
        })
        .on('error', error => { reject(error); });
    });
};
