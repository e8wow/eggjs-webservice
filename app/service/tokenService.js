const Service = require('egg').Service

class TokenService extends Service {
    getToken() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    accessToken: '123123',
                    refreshToken: '999999999'
                })
            }, 0)
        })
    }
}

module.exports = TokenService
