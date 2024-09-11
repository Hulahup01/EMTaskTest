import PaginationDto from '../pagination.dto.js';

export default class GetStockDto extends PaginationDto {
    product_plu;
    shop_id;
    shelfAmountMin;
    shelfAmountMax;
    orderAmountMin;
    orderAmountMax;

    constructor(data) {
        super(data);
        this.product_plu = data?.product_plu;
        this.shop_id = data?.shop_id;
        this.shelfAmountMin = +data?.shelfAmountMin;
        this.shelfAmountMax = +data?.shelfAmountMax;
        this.orderAmountMin = +data?.orderAmountMin;
        this.orderAmountMax = +data?.orderAmountMax;
    }
}