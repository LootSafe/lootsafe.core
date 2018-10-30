const chalk = require('chalk');
const connect = require('../connect');
const Asset = require('../../models/Asset');
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
            console.log(`[${new Date().toString()}]`, 'transaction', identifier, hash);
            resolve(hash);
            const asset = new Asset();
            asset.create(symbol, name, identifier);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
           if (receipt.events.OwnershipTransferred.address) {
                const asset = new Asset(identifier);
                asset.setAddress(receipt.events.OwnershipTransferred.address);
            }
            console.log(`[${new Date().toString()}]`, 'confirmation', identifier, confirmationNumber);
            const asset = new Asset(identifier);
            asset.updateConfirm(confirmationNumber);
        })
        .on('error', error => { reject(error); });
    });
};
