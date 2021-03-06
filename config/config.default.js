'use strict'

module.exports = appInfo => {
    const config = {}
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1526389051224_8750'

    // add your config here
    config.middleware = ['errorHandler']

    config.oauth2Server = {
        grants: ['password', 'client_credentials']
    }

    config.security = {
        csrf: {
            // useSession: true
            ignoreJson: true,
            enable: false // TODO CSRF攻击防范暂时关闭
        },
        methodnoallow: {
            enable: false
        },
        domainWhiteList: ['http://localhost:7001', 'http://localhost:3000']
    }

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
        credentials: true
    }

    config.jwt = {
        secret: '!@#jelf19971114(*%$$?/\'}[~``*^'
    }

    config.mongoose = {
        client: {
            url: 'mongodb://localhost/blog',
            options: {}
        }
    }
    return config
}
