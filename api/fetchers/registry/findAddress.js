const connect = require('../connect');
const { contracts } = require('../../../config');

/**
 * Get the owner of the registry contract
 * @route
 */
module.exports = (identifier) => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return connect(registry.abi, contracts.registry).methods.assetAddresses(identifier).call((err, address) => {
        return address;
    });
};
