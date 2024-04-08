import sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table({tableName:'exams'})
export class Exams extends Model<Exams> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @Column
    exams_title: string;

    @ForeignKey(()=>User)
    user_id: string;

    @BelongsTo(()=> User,{foreignKey:'user_id'})
    user: User

    @Column({defaultValue: {}, type:sequelize.JSON})
    content: string

    @Column({defaultValue: {}, type:sequelize.JSON})
    question_and_answer: string;
}