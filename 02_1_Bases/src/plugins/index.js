const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin')
const { http } = require('../plugins/http-client.plugin')
const { httpAxios } = require('../plugins/http-client-axios.plugin')
const buildLogger = require('../plugins/logger.plugins')

module.exports = {
    getAge,
    getUUID,
    http,
    httpAxios,
    buildLogger,

}