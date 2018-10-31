const { setMetadata } = require('../../setters');
const respond = require('../respond');
const IPFS = require('ipfs-api');

/**
 * Get the address of the asset owner
 * @route
 */
module.exports = async (ctx, address, key) => {
  const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
  const ipfsUpload = new Promise(resolve => {
    ipfs.util.addFromFs(ctx.request.files[0].path, (err, result) => {
      if (err) {
        throw err;
      }
      resolve(result[0]);
    });
  });
  const ipfsResult = await ipfsUpload;
  const response = await setMetadata(address, key, ipfsResult.hash);
  respond(ctx, 200, 'Asset metadata set.', response);
};

