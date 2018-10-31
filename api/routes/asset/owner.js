const { assetOwner } = require('../../getters');
const respond = require('../respond');

/**
 * Get the address of the asset owner
 * @route
 * @returns the owner of an asset
 */
module.exports = async (ctx, address) => {
    const response = await assetOwner(address);
    respond(ctx, 200, 'Asset owner fetched.', response);
};

