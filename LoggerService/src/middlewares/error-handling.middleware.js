import ValidationError from '../errors/validation.error.js';
import ApiError from '../errors/api.error.js';
import httpStatus from 'http-status';

export default function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.status).json({message: err.message});
    }
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    console.log(err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: '!Unexpected error!'});
}