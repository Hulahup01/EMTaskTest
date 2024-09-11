export default class CreateProductDto {
    plu;
    name;

    constructor(data) {
        this.plu = data?.plu;
        this.name = data?.name;
    }
}