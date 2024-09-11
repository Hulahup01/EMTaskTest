import PaginationDto from '../pagination.dto.js';

export default class GetProductDto extends PaginationDto {
    search;

    constructor(data) {
        super(data);
        this.search = data?.search;
    }
}