const Service = require('egg').Service

class ArticleService extends Service {
    save(body) {
        this.ctx.logger.info(body)
        const article = new this.ctx.model.Article({
            ...body,
            order_no: 1
        })
        article.save()
        return article
    }

    async find(body) {
        this.ctx.logger.info(body)
        const res = await require('../model/Base').findList(this.ctx.model.Article, body)
        this.ctx.logger.info(res)
        return res
    }
}

module.exports = ArticleService
