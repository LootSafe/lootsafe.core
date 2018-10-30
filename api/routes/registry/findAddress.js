const { findAddress } = require('../../fetchers');

/**
 * Get the address of the registry owner
 * @route
 */
module.exports = async (ctx, identifier) => {
  const response = await findAddress(identifier);
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: 'Asset address found.',
    data: response
  };
};

