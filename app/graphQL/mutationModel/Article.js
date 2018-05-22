module.exports = `
    mutation createArticle($article:Article!) {
      createReview(episode: $ep, review: $review) {
        stars
        commentary
      }
    }
`
