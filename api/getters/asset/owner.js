const { connect } = require('../../helpers');
const { contracts } = require('../../../config');

/**
 * Get the address of the asset owner
 * @fetcher
 * @returns the owner of an asset
 */
module.exports = () => {
    const registry = require(`${contracts.buildDir}/Asset.json`);
    return connect(registry.abi, contracts.registry).methods.owner().call((err, owner) => {
        return owner;
    });
};
