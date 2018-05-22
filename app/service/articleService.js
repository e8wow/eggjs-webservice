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

    find(body) {
        this.ctx.logger.info(body)
        return this.ctx.model.Article.find({})
    }
}

module.exports = ArticleService
