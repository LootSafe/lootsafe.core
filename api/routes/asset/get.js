const { get } = require('../../getters');
const respond = require('../respond');

/**
 * Get an asset
 * @route
 * @returns a single asset from the DB
 */
module.exports = async (ctx, identifier) => {
    const response = await get(identifier);
    respond(ctx, 200, 'Asset fetched.', response);
};

