const { setMetadata } = require('../../setters');
const respond = require('../respond');

/**
 * Set metadata on a specific asset
 * @route
 * @param address the address of the asset to modify
 * @returns the transaction hash
 */
module.exports = async (ctx, address) => {
  const req = ctx.request.body;
  if (req.key && req.value) {
      const response = await setMetadata(address, req.key, req.value);
      if (response.error) {
          respond(ctx, 500, response.error.toString());
      } else {
          respond(ctx, 200, 'Metadata set.', response.hash);
      }
  } else {
      respond(ctx, 422, 'Missing required creation params.', null);
  }
};

