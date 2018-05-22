const {makeExecutableSchema} = require('graphql-tools')

const Query = require('./Query.js')
const Article = require('./queryModel/Article.js')

// 定义Schema字符串
const typeDefs = `${Query}${Article}`

// 解析器
const resolvers = {
    Query: {
        async articles(root, args, ctx) {
            const res = await ctx.service.articleService.find(args)
            return res
        }
    }
}

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})
