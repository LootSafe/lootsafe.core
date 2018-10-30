module.exports = {
    contracts: {
        registry: '0xb94dc475fb2c8fd8c1381f163c59dbc570c500d0',
        buildDir: `${__dirname}/api/contracts/core/build/contracts`
    },
    port: 1007,
    version: 1,
    dbURI: 'mongodb://localhost/lscore',
    defaultAccount: '0xbBEF6Be732404c372153241cFB1d3213a054A2A8',
    provider: 'http://localhost:8545',
    gas: 3000000,
    // If enabled, ngrok will forward the server
    dev: {
        devmode: true
    }
};
