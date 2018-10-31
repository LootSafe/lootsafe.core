const { owner } = require('../../getters');
const respond = require('../respond');

/**
 * Get the address of the registry owner
 * @route
 * @returns the owners address
 */
module.exports = async (ctx) => {
    const response = await owner();
    respond(ctx, 200, 'Registry owner fetched.', response);
};

