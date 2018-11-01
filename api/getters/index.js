module.exports = {
    owner: require('./registry/owner'),
    assetOwner: require('./asset/owner'),
    assets: require('./registry/assets'),
    findAddress: require('./registry/findAddress'),
    list: require('./asset/list'),
    get: require('./asset/get'),
    inventory: require('./inventory/inventory')
};
