const chalk = require('chalk');
const Koa = require('koa');
const cors = require('koa-cors');
const _ = require('koa-route');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const convert = require('koa-convert');

const {
    contracts,
    version,
    port,
    dev
} = require(`${__dirname}/../config`);

const app = new Koa();

const {
    meta,
    owner,
    assets,
    create
} = require('./routes');

// *******************
// --- Middleware ----
// *******************
app.use(convert(cors()));
app.use(convert(bodyParser()));
app.use(convert(logger()));

// *******************
// ----- Routes ------
// *******************
app.use(_.get(`/v${version}/`, meta));
app.use(_.get(`/v${version}/registry/owner`, owner));
app.use(_.get(`/v${version}/registry/assets`, assets));
app.use(_.post(`/v${version}/registry/create`, create));

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