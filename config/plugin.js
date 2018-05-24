'use strict'

// had enabled by egg
// exports.static = true;

// OAuth2插件
exports.oauth2Server = {
    enable: true,
    package: 'egg-oauth2-server'
}

// JWT插件
exports.jwt = {
    enable: true,
    package: 'egg-jwt'
}

// mongoose插件
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose'
}

exports.cors = {
    enable: true,
    package: 'egg-cors'
}