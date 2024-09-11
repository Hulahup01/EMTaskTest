export default class CreateStockDto {
    product_plu;
    shop_id;
    quantity_on_order;
    quantity_on_shelf;

    constructor(data) {
        this.product_plu = data?.product_plu;
        this.shop_id = data?.shop_id;
        this.quantity_on_order = +data?.quantity_on_order;
        this.quantity_on_shelf = +data?.quantity_on_shelf;
    }
}