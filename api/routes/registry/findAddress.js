const { findAddress } = require('../../getters');
const respond = require('../respond');

/**
 * Get the address of a specified asset
 * @route
 * @param identifier the identifier of the asset
 * @returns the address of the asset
 */
module.exports = async (ctx, identifier) => {
    const response = await findAddress(identifier);
    respond(ctx, 200, 'Asset address found.', response);
};

