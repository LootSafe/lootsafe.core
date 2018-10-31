const { assets } = require('../../getters');
const respond = require('../respond');

/**
 * Get the assets within the registry
 * @route
 * @returns the asset identifiers in the registry
 */
module.exports = async (ctx) => {
  const response = await assets();
  respond(ctx, 200, (response.length === 0) ? 'No assets registered.' : 'Registry assets fetched.', response);
};

