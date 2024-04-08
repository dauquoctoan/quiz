import sequelize, { Sequelize } from 'sequelize';
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import { Answer } from 'src/api/answer/entitys/answer.entity';
import { Exams } from 'src/api/exams/entitys/exams.entity';

@Table({tableName:'questions'})
export class Question extends Model<Question> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    
    @Column({})
    question_text: string;

    @ForeignKey(() => Exams)
    exams_answer_id: Exams;

    @BelongsTo(() => Exams, { foreignKey: 'exams_answer_id' })
    exams_answer: Exams;

    @ForeignKey(() => Answer)
    correct_answer_id: Answer;

    @BelongsTo(() => Answer, { foreignKey: 'correct_answer_id' })
    correct_answer: Answer;

    @HasMany(() => Answer)
    answers: Answer[];
}