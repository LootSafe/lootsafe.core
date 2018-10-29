const { assets } = require('../../fetchers');

/**
 * Get the assets within the registry
 * @route
 */
module.exports = async (ctx) => {
  const response = await assets();
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: (response.length === 0) ? 'No assets registered.' : 'Registry assets fetched.',
    data: response
  };
};

