'use strict'
const BaseController = require('./baseController')

class UserController extends BaseController {
    getUser(ctx) {
        ctx.body = {userId: 1}
    }
}

module.exports = UserController
