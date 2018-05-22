'use strict'
const {graphqlKoa, graphiqlKoa} = require('apollo-server-koa')

const schema = require('./graphQL')

module.exports = app => {
    const {router, oAuth2Server, controller} = app
    // router.all('/login', oAuth2Server.token())
    // router.get('/user', oAuth2Server.authenticate(), 'user.getUser')
    const {tokenController, userController, articleController} = controller
    router.get('/login/username/:username/password/:password', tokenController.getToken)
    router.get('/user', app.jwt, userController.getUser)
    router.post('/article', app.jwt, articleController.save)
    router.get('/article', articleController.find)

    router.post('/graphql', graphqlKoa(req => {
        req.logger.info(req.request.body)
        return {
            schema,
            context: req,
            formatError(err) {
                if (err.originalError && err.originalError.error_message) {
                    err.message = err.originalError.error_message
                }
                return err
            },
            debug: app.config.env === 'local'
        }
    }))
    router.get(
        '/graphiql',
        graphiqlKoa({
            endpointURL: '/graphql', // a POST endpoint that GraphiQL will make the actual requests to
            passHeader: `'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUyNjgwMzM0NywiZXhwIjoxNTI5Mzk1MzQ3fQ.acIFiBZzv9MpH9Si6pX7dFNSDsfRmb_KpqvedS5cCrc'`
        })
    )
}
