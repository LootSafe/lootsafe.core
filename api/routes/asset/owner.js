const { assetOwner } = require('../../fetchers');

/**
 * Get the address of the asset owner
 * @route
 */
module.exports = async (ctx, address) => {
  const response = await assetOwner(address);
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: 'Asset owner fetched',
    data: response
  };
};

