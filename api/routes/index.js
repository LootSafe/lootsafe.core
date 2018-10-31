module.exports = {
    meta: require('./meta'),
    owner: require('./registry/owner'),
    assets: require('./registry/assets'),
    create: require('./registry/create'),
    findAddress: require('./registry/findAddress'),
    assetOwner: require('./asset/owner'),
    setMetadata: require('./asset/setMetadata'),
    list: require('./asset/list')
};
