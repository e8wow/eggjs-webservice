const Article = require('../model/Article')

module.exports = {
    async save(ctx) {
        const article = new Article()
        try {
            const result = await article.save()
            console.log(result)
        } catch (e) {
            ctx.logger.error(e)
        }
    }
}
