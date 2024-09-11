export default class AdjustStockDto {
    shelfAmount;
    orderAmount;

    constructor(data) {
        this.orderAmount = +data?.orderAmount;
        this.shelfAmount = +data?.shelfAmount;
    }
}