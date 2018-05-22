'use strict'
const BaseController = require('./baseController')
const crypto = require('crypto')

class TokenController extends BaseController {
    getToken(ctx) {
        console.log(ctx.params.username, crypto.createHash('md5').update(ctx.params.password).digest('hex'))
        ctx.body = {
            access_token: this.app.jwt.sign({userId: 1}, this.app.config.jwt.secret, {
                expiresIn: '2h',
                issuer: 'http://v2.api.e8wow.com'
            }),
            refresh_token: this.app.jwt.sign({userId: 1}, this.app.config.jwt.secret, {
                expiresIn: '30d',
                issuer: 'http://v2.api.e8wow.com'
            })
        }
    }
}

module.exports = TokenController
