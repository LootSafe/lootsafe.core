const { create } = require('../../fetchers');

/**
 * Create assets on the registry
 * @route
 * @returns transaction hash for asset creation
 */
module.exports = async (ctx) => {
  const req = ctx.request.body;

  if (req.symbol && req.name && req.identifier) {
    const response = await create(req.symbol, req.name, req.identifier);
    ctx.status = 200;
    ctx.body = {
      status: 200,
      message: 'Requested new asset creation.',
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

