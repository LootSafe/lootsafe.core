module.exports = {
    contracts: {
        registry: '0xa5c55ef045e6715142dfce361b9dc9a0b255e746',
        buildDir: `${__dirname}/api/contracts/core/build/contracts`
    },
    port: 1007,
    version: 1,
    dbURI: 'mongodb://localhost/lscore',
    defaultAccount: '0x7913d6f01e76c50fa1188b72f7a5a24a00294579',
    provider: 'http://0.0.0.0:8546',
    gas: 3000000,
    secret: 'changememeow',
    // If enabled, ngrok will forward the server
    dev: {
        devmode: true
    }
};
