module.exports = `
    type Query {
        article(_id: String): Article
        articles(page: Int, limit: Int): Articles
    }
`
