const { connect } = require('../../helpers');
const { contracts } = require('../../../config');

/**
 * Get the address of the asset owner
 * @fetcher
 * @returns the owner of an asset
 */
module.exports = (address) => {
    const asset = require(`${contracts.buildDir}/Asset.json`);
    return connect(asset.abi, address).methods.owner().call((err, owner) => {
        return owner;
    });
};
