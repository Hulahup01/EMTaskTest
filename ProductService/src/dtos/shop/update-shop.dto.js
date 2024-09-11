export default class UpdateShopDto {
    name;

    constructor(data) {
        this.name = data?.name;
    }
}