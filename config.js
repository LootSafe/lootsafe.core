module.exports = {
    contracts: {
        registry: '0x7adf37e9e8c3e74b5876053fa8fa1e1cef15cc4f',
        buildDir: `${__dirname}/api/contracts/core/build/contracts`
    },
    port: 1007,
    version: 1,
    defaultAccount: '0xbBEF6Be732404c372153241cFB1d3213a054A2A8',
    provider: 'http://localhost:8545',
    gas: 3000000,
    // If enabled, ngrok will forward the server
    dev: {
        devmode: true
    }
};
