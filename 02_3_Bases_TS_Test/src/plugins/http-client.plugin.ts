
// wrapper - patron adaptador

export const httpClientPlugin = {

    get: async(url: string) => {
        const response = await fetch( url );
        return await response.json();
    },

    post: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },

};


