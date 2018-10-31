const Asset = require('../../models/Asset');

/**
 * Get a list of all assets
 * @route
 */
module.exports = () => {
    return new Promise((resolve, reject) => {
        const asset = new Asset();
        asset.getAll().then(assets => { resolve(assets) });
    });
};
