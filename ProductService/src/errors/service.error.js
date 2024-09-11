import ApiError from './api.error.js';
import httpStatus from 'http-status';

export default class ServiceError extends ApiError {
    constructor(message) {
        super(httpStatus.BAD_REQUEST, message);
    }
}