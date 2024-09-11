import ApiError from './api.error.js';
import httpStatus from 'http-status';

export default class ValidationError extends ApiError {
    constructor(message) {
        super(httpStatus.UNPROCESSABLE_ENTITY, message);
    }
}