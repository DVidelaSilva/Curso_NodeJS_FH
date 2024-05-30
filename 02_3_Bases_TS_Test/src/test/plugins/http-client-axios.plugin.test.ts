import { httpClientAxiosPlugin } from "../../plugins/http-client-axios.plugin";


describe('plugins/httpClientAxiosPlugin.ts', () => {

    test('httpClientAxiosPlugin.get () should return a string', async() => {

httpClientAxiosPlugin
        const data = await httpClientAxiosPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        })
    })

    test('httpClientPlugin shlould have POST, PUT and DELETE methods', () => {

        expect( typeof httpClientAxiosPlugin.post).toBe('function')
        expect( typeof httpClientAxiosPlugin.put).toBe('function')
        expect( typeof httpClientAxiosPlugin.delete).toBe('function')
    })
})
