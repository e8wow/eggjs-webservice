module.exports = `
    type Query {
        article(_id: String): Article
        articles: [Article]!
    }
`
