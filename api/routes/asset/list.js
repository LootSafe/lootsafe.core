const { list } = require('../../fetchers');

/**
 * Get a list of all assets cached in the system
 * @route
 */
module.exports = async (ctx) => {
  const response = await list();
  ctx.status = 200;
  ctx.body = {
    status: 200,
    message: 'Assets fetched',
    data: response
  };
};

