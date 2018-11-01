const chalk = require('chalk');
const Koa = require('koa');
const cors = require('koa-cors');
const _ = require('koa-route');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const convert = require('koa-convert');
const busboy = require('koa-busboy');

const {
    contracts,
    version,
    port,
    dev,
    secret
} = require(`${__dirname}/../config`);

const app = new Koa();

const {
    meta,
    owner,
    assets,
    create,
    findAddress,
    assetOwner,
    setMetadata,
    setFileMetadata,
    list,
    get,
    inventory,
    mint
} = require('./routes');

// *******************
// --- Middleware ----
// *******************
function restricted (mw) {
  return async function(ctx, next) {
    if (ctx.request.headers.secret && ctx.request.headers.secret === secret) {
      await next();
    } else {
        ctx.status = 410;
        ctx.body = {
            status: 401,
            message: 'Unauthorized.'
        };
    }
  };
}
app.use(convert(cors()));
app.use(convert(bodyParser()));
app.use(convert(logger()));
app.use(busboy());

// *******************
// ----- Routes ------
// *******************
app.use(_.get(`/v${version}/`, meta));
app.use(_.get(`/v${version}/registry/owner`, owner));
app.use(_.get(`/v${version}/registry/assets`, assets));
app.use(_.get(`/v${version}/registry/find/:identifier`, findAddress));
app.use(_.get(`/v${version}/inventory/:userAddress`, inventory));

app.use(_.get(`/v${version}/asset/owner/:address`, assetOwner));
app.use(_.get(`/v${version}/asset/list`, list));
app.use(_.get(`/v${version}/asset/get/:identifier`, get));

app.use(restricted());
app.use(_.post(`/v${version}/registry/create`, create));
app.use(_.post(`/v${version}/asset/metadata/set/:address`, setMetadata));
app.use(_.get(`/v${version}/asset/mint/:address/:recipient/:amount`, mint));
app.use(_.post(`/v${version}/asset/metadata/file/set/:address/:key`, setFileMetadata));

// *******************
// ------ Start ------
// *******************

app.listen(port);

// 🚀 We have liftoff
console.log(
  chalk.bold(
    chalk.white(
      `🦄 LootSafe Core running and listening on port ${port}`.toUpperCase(),
      chalk.gray(`\nCTRL+Click here to browse: http://localhost:${port}`)
    )
  )
);
