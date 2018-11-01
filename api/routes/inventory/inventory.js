const { inventory } = require('../../getters');
const respond = require('../respond');

/**
 * Get a list of balances for each item in a registry, on a given user.
 * @route
 * @param userAddress the address we're checking balances on.
 * @returns array containing all items that have a positive balance, including the actual balance
 */
module.exports = async (ctx, userAddress) => {
    const response = await inventory(userAddress);
    respond(ctx, 200, 'Inventory fetched.', response);
};

