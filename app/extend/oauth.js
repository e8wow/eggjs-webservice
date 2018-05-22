'use strict'

module.exports = app => {
    class Model {
        constructor(ctx) {
            this.ctx = ctx
        }

        async getClient(clientId, clientSecret) {
            if (clientId !== 'my_app' || clientSecret !== 'my_secret') {
                return
            }
            return {
                'id': 1,
                'clientId': 'my_app',
                'clientSecret': 'my_secret',
                'redirectUris': [
                    'http://implements.io'
                ],
                'refreshTokenLifetime': 720000,
                'accessTokenLifetime': 7200,
                'grants': [
                    'password'
                ]
            }
        }

        async getUser(username, password) {
            const user = {
                'id': 1,
                'username': 'jelf',
                'password': '123456'
            }
            if (username !== user.username || password !== user.password) {
                return
            }
            return {userId: user.id}
        }

        async getAccessToken(bearerToken) {
            console.log(bearerToken)
            const token = {
                'accessToken': '3d8a43428b8f1361916b3c14d5e26a7294d3daf7',
                'accessTokenExpiresAt': '2018-05-28T10:35:49.245Z',
                'refreshToken': '754dead55f3170d5c1f913f0adbd6e7a7d01e18e',
                'refreshTokenExpiresAt': '2018-05-28T09:35:49.245Z',
                'user': {
                    'userId': 1
                },
                'client': {
                    'id': 1,
                    'clientId': 'my_app',
                    'clientSecret': 'my_secret',
                    'redirectUris': [
                        'http://implements.io'
                    ],
                    'refreshTokenLifetime': 0,
                    'accessTokenLifetime': 0,
                    'grants': [
                        'password'
                    ]
                }
            }
            token.accessTokenExpiresAt = new Date(token.accessTokenExpiresAt)
            token.refreshTokenExpiresAt = new Date(token.refreshTokenExpiresAt)
            const user = {
                'id': 1,
                'username': 'egg-oauth2-server',
                'password': 'azard'
            }
            const client = {
                'id': 1,
                'clientId': 'my_app',
                'clientSecret': 'my_secret',
                'redirectUris': [
                    'http://implements.io'
                ],
                'refreshTokenLifetime': 0,
                'accessTokenLifetime': 0,
                'grants': [
                    'password'
                ]
            }
            token.user = user
            token.client = client
            return token
        }

        async saveToken(token, client, user) {
            console.log(token, client, user)
            const _token = Object.assign({}, token, {user}, {client})
            return _token
        }
    }

    return Model
}
