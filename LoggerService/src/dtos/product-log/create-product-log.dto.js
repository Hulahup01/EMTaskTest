export default class CreateProductLogDto {
    plu;
    action;
    date;
    details;

    constructor(data) {
        this.plu = data?.plu;
        this.action = data?.action;
        this.date = data?.date;
        this.details = data?.details;
    }
}