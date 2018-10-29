const connect = require('../connect');
const { contracts } = require('../../../config');

/**
 * Get the owner of the registry contract
 * @route
 */
module.exports = () => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    console.log('contract', connect(registry.abi, contracts.registry));
    return connect(registry.abi, contracts.registry).methods.owner().call((err, owner) => {
        return owner;
    });
};
