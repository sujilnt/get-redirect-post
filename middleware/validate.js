/**
 * Checks if req.body is a number or not . if it is number then handler
 * is called or else throws error.
 *
 * @param schema - type of schema which is defined using pug library
 * @param handler - api handler method that is used to handle POST,
 * GET, PUT or DELETE operation.
 *
 */
export function validate(schema, handler) {
    return async (req, res) => {
        if (['POST'].includes(req.method)) {
            try {
                req.body = await schema.validate(Number(req.body), { abortEarly: false, stripUnknown: true });
            } catch (error) {
                return res.status(400).json({
                    error: "validation error",
                    message: "The input value type is not a number"
                });
            }
        }
        await handler(req, res);
    };
}
