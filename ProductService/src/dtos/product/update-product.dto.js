export default class UpdateProductDto {
    name;

    constructor(data) {
        this.name = data?.name;
    }
};