const { connect } = require('../../helpers');
const Asset = require('../../models/Asset');
const { provider, contracts, defaultAccount, gas } = require('../../../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

/**
 * Mint an asset to a user
 * @setter
 * @param address address of the asset to mint
 * @param recipient recipient of the assets
 * @param amount amount of the asset to be minted
 * @returns the transaction hash
 */
module.exports = (address, recipient, amount) => {
    const asset = require(`${contracts.buildDir}/Asset.json`);
    return new Promise((resolve) => {
       connect(asset.abi, address)
        .methods
        .mint(amount, recipient)
        .send({ from: defaultAccount, gas })
        .on('transactionHash', (hash) => {
            console.log(`[${new Date().toString()}]`, 'transaction', address, hash);
            resolve({error: false, hash});
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log(`[${new Date().toString()}]`, 'confirmation', address, confirmationNumber);
        })
        .on('error', error => { resolve({error}); });
    });
};
