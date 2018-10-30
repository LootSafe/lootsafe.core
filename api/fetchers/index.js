module.exports = {
    connect: require('./connect'),
    owner: require('./registry/owner'),
    assetOwner: require('./asset/owner'),
    assets: require('./registry/assets'),
    create: require('./registry/create'),
    findAddress: require('./registry/findAddress'),
    setMetadata: require('./asset/setMetadata')
};
