const {makeExecutableSchema} = require('graphql-tools')

const Query = require('./Query.js')
const Article = require('./queryModel/Article.js')

// 定义Schema字符串
const typeDefs = `${Query}${Article}`

// 解析器
const resolvers = {
    Query: {
        async articles(root, {limit = 10, page = 1, ...params}, ctx) {
            const res = await ctx.service.articleService.find({
                limit,
                page,
                ...params
            })
            return res
        }
    }
}

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})
