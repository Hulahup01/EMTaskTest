export default class CreateStockLogDto {
    product_plu;
    shop_id;
    action;
    date;
    details;

    constructor(data) {
        this.product_plu = data?.product_plu;
        this.shop_id = data?.shop_id;
        this.action = data?.action;
        this.date = data?.date;
        this.details = data?.details;
    }
}