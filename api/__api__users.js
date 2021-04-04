const { adaptor } = require('next-export-api')
const { default: handler } = require('../../.next/server/pages/api/users.js')

module.exports.handler = adaptor(handler)
