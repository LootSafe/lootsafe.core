const { connect } = require('../../helpers');
const { contracts } = require('../../../config');
const Asset = require('../../models/Asset');

/**
 * Get a list of balances for each item in a registry, on a given user.
 * @getter
 * @param userAddress the address we're checking balances on.
 * @returns array containing all items that have a positive balance, including the actual balance
 */
module.exports = (userAddress) => {
    const registry = require(`${contracts.buildDir}/Registry.json`);
    return new Promise(resolve => {
        connect(registry.abi, contracts.registry).methods.getAssets().call((err, assets) => {
            const assetAddresses = [];
            for (let i = 0; i < assets.length; i++) {
                assetAddresses.push(connect(registry.abi, contracts.registry).methods.assetAddresses(assets[i]).call((err, address) => {
                    return address;
                }));
            }
            Promise.all(assetAddresses).then((result) => {
                const asset = new Asset();
                const iasset = require(`${contracts.buildDir}/Asset.json`);
                const assetDocuments = [];
                for (let i = 0; i < result.length; i++) {
                    assetDocuments.push(new Promise((resolve) => {
                        asset.get(null, result[i]).then(asset => {
                            connect(iasset.abi, asset[0].address).methods.totalSupply().call((err, supply) => {
                                connect(iasset.abi, asset[0].address).methods.balanceOf(userAddress).call((err, balance) => {
                                    resolve(
                                        Object.assign(
                                            {},
                                            asset[0]._doc,
                                            {
                                                supply: parseInt(supply),
                                                balance: parseInt(balance)
                                            }
                                        )
                                    );
                                });
                            });
                        });
                    }));
                }
                Promise.all(assetDocuments).then(finalResult => {
                    const filtered = finalResult.filter(asset => asset.balance > 0);
                    resolve(filtered);
                });
            });
        });
    });
};
