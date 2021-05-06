export default class HapiAdapter {
    static create (fn) {
        return async (req, ) => {
            const obj = await fn(req.params, req.payload)
            return obj
        }
    }
}