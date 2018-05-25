'use strict'
const BaseController = require('./baseController')

class ArticleController extends BaseController {
    async save(ctx) {
        ctx.body = await ctx.service.articleService.save(ctx.request.body)
    }

    async find(ctx) {
        ctx.body = await ctx.service.articleService.find(ctx.query)
    }
}

module.exports = ArticleController
