const { owner } = require('../../fetchers');

/**
 * Get the address of the registry owner
 * @route
 */
module.exports = async (ctx) => {
  const response = await owner();
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: 'Registry owner fetched',
    data: response
  };
};

