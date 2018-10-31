const { connect } = require('../../helpers');
const { contracts } = require('../../../config');

/**
 * Get the assets within the registry
 * @fetcher
 * @returns the asset identifiers in the registry
 */
module.exports = () => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return connect(registry.abi, contracts.registry).methods.getAssets().call((err, assets) => {
        return assets;
    });
};
