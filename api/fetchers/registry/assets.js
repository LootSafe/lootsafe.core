const connect = require('../connect');
const { contracts } = require('../../../config');

/**
 * Get the assets registered to the contract
 * @route
 */
module.exports = () => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return connect(registry.abi, contracts.registry).methods.getAssets().call((err, assets) => {
        return assets;
    });
};
