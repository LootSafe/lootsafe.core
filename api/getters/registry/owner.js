const { connect } = require('../../helpers');
const { contracts } = require('../../../config');

/**
 * Get the address of the registry owner
 * @getter
 * @returns the owners address
 */
module.exports = () => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return connect(registry.abi, contracts.registry).methods.owner().call((err, owner) => {
        return owner;
    });
};
