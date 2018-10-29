const {
  version,
  provider,
  contracts
} = require('../../config');

module.exports = (ctx) => {
  ctx.status = 200;
  ctx.body = {
    registry: contracts.registry,
    version,
    provider
  }
};
