const Asset = require('../../models/Asset');

/**
 * Get a list of all assets cached in the system
 * @fetcher
 * @returns the list of assets in our DB
 */
module.exports = () => {
    return new Promise((resolve, reject) => {
        const asset = new Asset();
        asset.getAll().then(assets => { resolve(assets) });
    });
};
