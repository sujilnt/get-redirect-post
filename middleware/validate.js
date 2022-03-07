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
