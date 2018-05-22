module.exports = () => async function errorHandler(ctx, next) {
    try {
        await next()
    } catch ({status, message, inner}) {
        console.log(inner.name)
        // console.log(message, status, ctx.acceptJSON)
        switch (status) {
            case 401: {
                if (inner.name === 'TokenExpiredError') {
                    ctx.status = 401
                    ctx.body = {
                        code: 99998,
                        message: '兄dei你的登录令牌已经过期啦~'
                    }
                }
                break
            }
        }
    }
}
