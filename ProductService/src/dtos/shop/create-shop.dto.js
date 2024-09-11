export default class CreateShopDto {
    name;

    constructor(data) {
        this.name = data?.name;
    }
}