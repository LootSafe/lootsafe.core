const { connect } = require('../../helpers');
const Asset = require('../../models/Asset');
const { provider, contracts, defaultAccount, gas } = require('../../../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

/**
 * Set metadata on a specific asset
 * @setter
 * @param address the address of the asset to modify
 * @returns the transaction hash
 */
module.exports = (address, key, value) => {
    const asset = require(`${contracts.buildDir}/Asset.json`);
    return new Promise((resolve, reject) => {
       connect(asset.abi, address)
        .methods
        .setMetadata(web3.utils.toHex(key), value)
        .send({ from: defaultAccount, gas })
        .on('transactionHash', (hash) => {
            console.log(`[${new Date().toString()}]`, 'transaction', address, hash);
            resolve(hash);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log(`[${new Date().toString()}]`, 'confirmation', address, confirmationNumber);
            const asset = new Asset(null, address);
            asset.setMetadata(key, value);
        })
        .on('error', error => { reject(error); });
    });
};
