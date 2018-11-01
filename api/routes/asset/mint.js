const { mint } = require('../../setters');
const respond = require('../respond');

/**
 * Mint an asset to a user
 * @route
 * @param address address of the asset to mint
 * @param recipient recipient of the assets
 * @param amount amount of the asset to be minted
 * @returns the transaction hash
 */
module.exports = async (ctx, address, recipient, amount) => {
  const response = await mint(address, recipient, amount);
  if (response.error) {
      respond(ctx, 500, response.error.toString());
  } else {
      respond(ctx, 200, 'Asset(s) minted.', response.hash);
  }
};

