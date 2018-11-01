const { connect } = require('../../helpers');
const { contracts } = require('../../../config');
const Asset = require('../../models/Asset');

/**
 * Get a list of all assets cached in the system
 * @fetcher
 * @returns the list of assets in our DB
 */
module.exports = (identifier) => {
    return new Promise((resolve) => {
        const asset = new Asset();
        const iasset = require(`${contracts.buildDir}/Asset.json`);
        asset.get(identifier).then(asset => {
            connect(iasset.abi, asset[0].address).methods.totalSupply().call((err, supply) => {
                resolve(Object.assign({}, asset[0]._doc, { supply: parseInt(supply) }));
            });
        });
    });
};
