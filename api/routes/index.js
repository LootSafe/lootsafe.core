module.exports = {
    meta: require('./meta'),
    owner: require('./registry/owner'),
    assets: require('./registry/assets'),
    create: require('./registry/create'),
    findAddress: require('./registry/findAddress'),
    assetOwner: require('./asset/owner'),
    setMetadata: require('./asset/setMetadata'),
    setFileMetadata: require('./asset/setFileMetadata'),
    list: require('./asset/list'),
    get: require('./asset/get'),
    inventory: require('./inventory/inventory'),
    mint: require('./asset/mint')
};
