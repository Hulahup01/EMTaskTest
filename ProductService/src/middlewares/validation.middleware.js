import ValidationError from '../errors/validation.error.js'

export default function (schema, property) {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        if (error) {
            throw new ValidationError(error.message);
        } else {
            next();
        }
    }
}