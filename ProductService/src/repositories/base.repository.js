export default class BaseRepository {
    constructor () {
        this.model = undefined
    }

    async create (data) {
        return (await this.model.create(data));
    }

    async findAll (options = {}) {
        return (await this.model.findAll(options));
    }

    async findOne (options = {}) {
        return (await this.model.findOne(options));
    }

    async findOrCreate (options = {}) {
        return (await this.model.findOrCreate(options));
    }

    async findByPk (id, options = {}) {
        return (await this.model.findByPk(id, options));
    }

    async update (data, options) {
        options.returning = true;
        const [affectedCount, [updatedRecord]] = await this.model.update(data, options);
        if (affectedCount === 0) {
            return null;
        }
        return updatedRecord;
    }

    async delete (options) {
        const deletedObject = await this.model.findOne(options);
        if (deletedObject) {
            await this.model.destroy(options);
        }
        return deletedObject;
    }
}
