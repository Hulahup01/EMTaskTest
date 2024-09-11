import PaginationDto from '../pagination.dto.js';

export default class GetProductLogDto extends PaginationDto {
    plu;
    action;
    date;

    constructor(data) {
        super(data);
        this.plu = data?.plu;
        this.action = data?.action;
        this.date = data?.date;
    }
}