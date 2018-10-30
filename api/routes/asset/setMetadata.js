const { setMetadata } = require('../../fetchers');

/**
 * Get the address of the asset owner
 * @route
 */
module.exports = async (ctx, address) => {
  const req = ctx.request.body;
  if (req.key && req.value) {
    const response = await setMetadata(address, req.key, req.value);
    ctx.status = 200;
    ctx.body = {
      status: 200,
      message: 'Metadata set.',
      data: response
    };
  } else {
    ctx.status = 422;
    ctx.body = {
      status: 422,
      message: 'Missing required creation params.'
    };
  }
};

