const { create } = require('../../setters');
const respond = require('../respond');

/**
 * Create assets on the registry
 * @route
 * @returns transaction hash for asset creation
 */
module.exports = async (ctx) => {
  const req = ctx.request.body;

  if (req.symbol && req.name && req.identifier) {
      const response = await create(req.symbol, req.name, req.identifier);
      respond(ctx, 200, 'Requested new asset creation.', response);
  } else {
      respond(ctx, 422, 'Missing required creation params.', response);
  }
};

