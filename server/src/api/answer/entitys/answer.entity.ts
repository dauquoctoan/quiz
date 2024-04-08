import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import { Question } from 'src/api/question/entitys/question.entity';

@Table({tableName:'answers'})
export class Answer extends Model<Answer> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    
    @Column
    answer_text: string;

    @ForeignKey(()=>Question)
    question_id: string;

    @Column({allowNull: true})
    image: string;

    @BelongsTo(()=>Question,{foreignKey: 'question_id'})
    question: Question;
}