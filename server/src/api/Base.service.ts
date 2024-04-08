import { Attributes, FindOptions, Model, ModelCtor, UpdateOptions, WhereOptions } from "sequelize";
import { handleResultError } from "src/helper/handleresult";
import { removeKeyNull } from "src/helper/key";
import { messageCreateFail, messageDeleteFail, messageFindFail, messageUpdateFail } from "src/helper/message.create";


export abstract class BaseService<T extends Model>{
    constructor(
        public repository: ModelCtor<T>,
    ) { }

    async create<C>(entity: C): Promise<T> {
        try {
            return await this.repository.create(removeKeyNull(entity));
        } catch (error) {
            console.log(error)
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async creates<C>(record: C[]) {
        try {
            return await this.repository.bulkCreate(record as any);
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findAll(options?: FindOptions<Attributes<T>>): Promise<T[]> {
        try {
            return await this.repository.findAll(options);
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findOneById(id: number | string): Promise<T> {
        try {
            return await this.repository.findByPk(id);
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findOne(query: FindOptions<any>): Promise<T> {
        try {
            return await this.repository.findOne(query);
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async update(itemUpdate: any, query: WhereOptions<Attributes<T>>): Promise<[affectedCount: number]> {
        try {
            return await this.repository.update(itemUpdate, { where: query });
        } catch (error) {
            handleResultError({ message: messageUpdateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async updateById(id: number | string, itemUpdate: any): Promise<[affectedCount: number]> {
        try {
            return await this.repository.update(itemUpdate, {
                where: { id: id as any },
            })
        } catch (error) {
            handleResultError({ message: messageUpdateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async removeById(id: number | string): Promise<number> {
        try {
            return await this.repository.destroy({ where: { id: id as any } });
        } catch (error) {
            handleResultError({ message: messageDeleteFail(`[${this.repository.getTableName()}]`), messageDetail: error });
        }
    }
}