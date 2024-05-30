
const axios = require('axios')

const httpClientAxiosPlugin = {

    get: async(url) => {
        const { data } = await axios.get(url);
        //console.log(data)
        return data
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},

};



module.exports = {
    httpAxios: httpClientAxiosPlugin,
}


