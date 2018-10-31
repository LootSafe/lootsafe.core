module.exports = function (ctx, status, message, data) {
    ctx.status = status;
    ctx.body = {
        status,
        message,
        data,
    };
};
