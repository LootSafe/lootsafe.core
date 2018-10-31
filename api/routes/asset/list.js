const { list } = require('../../getters');
const respond = require('../respond');

/**
 * Get a list of all assets cached in the system
 * @route
 * @returns the list of assets in our DB
 */
module.exports = async (ctx) => {
    const response = await list();
    respond(ctx, 200, 'Assets fetched.', response);
};

