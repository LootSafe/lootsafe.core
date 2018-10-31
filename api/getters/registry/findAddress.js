const { connect } = require('../../helpers');
const { contracts } = require('../../../config');

/**
 * Get the address of a specified asset
 * @getter
 * @param identifier the identifier of the asset
 * @returns the address of the asset
 */
module.exports = (identifier) => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return connect(registry.abi, contracts.registry).methods.assetAddresses(identifier).call((err, address) => {
        return address;
    });
};
