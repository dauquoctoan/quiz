import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import { Answer } from './answer.entity';

@Table({tableName:'images'})
export class Image extends Model<Image> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(()=>Answer)
    answer_id: Answer

    @BelongsTo(()=>Answer,{foreignKey: 'answer_id'})
    answer: Answer

    @Column
    image_url: string;

    @HasMany(()=>Image)
    image_urls: Image[]
}