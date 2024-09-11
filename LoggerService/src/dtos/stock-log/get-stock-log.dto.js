import PaginationDto from '../pagination.dto.js';

export default class GetStockLogDto extends PaginationDto {
    product_plu;
    shop_id;
    action;
    date;

    constructor(data) {
        super(data);
        this.product_plu = data?.product_plu;
        this.shop_id = data?.shop_id;
        this.action = data?.action;
        this.date = data?.date;
    }
}