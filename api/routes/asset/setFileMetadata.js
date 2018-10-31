const { setMetadata } = require('../../setters');
const respond = require('../respond');

/**
 * Get the address of the asset owner
 * @route
 */
module.exports = async (ctx, address) => {
  const req = ctx.request.body;
  if (req.key && req.value) {
    const response = await setMetadata(address, req.key, req.value);
    respond(ctx, 200, 'Metadata set.', response);
  } else {
    respond(ctx, 422, 'Missing required creation params.', response);
  }
};

