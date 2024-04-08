import sequelize, { Sequelize } from 'sequelize';
import { BelongsToMany, Column, CreatedAt, DataType, HasMany, Length, Model, Table, PrimaryKey, Is, ForeignKey, BelongsTo, Unique } from 'sequelize-typescript';
import { DEFAULT_ONBOARDING } from 'src/constants/entity-constant';
import { validEmail } from 'src/helper/regex';

@Table({tableName:'Users'})
export class User extends Model<User> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! PK
    */
    @Unique({name: 'username_unique', msg: 'username_should_be_unique'})
    @Column({ allowNull: false})
    username: string;

    @Column
    mobileNumber: string;

    @Is('email', (data) => {
        if (!validEmail(data)) throw Error('Invalid Email')
    })
    @Unique({name: 'email_unique', msg: 'email_should_be_unique'})
    @Column({ allowNull: false })
    email: string;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    avatar: string;

    @Column
    cover_image: string;

    @Column
    last_location: string;

    @Column
    created_location: string;

    @Column({ defaultValue: false })
    is_superuser: boolean;

    @Column({ defaultValue: false })
    is_managed: boolean;

    @Column({ defaultValue: false })
    is_password_expired: boolean;

    @Column({ defaultValue: true })
    is_active: boolean;

    @Column({ defaultValue: false })
    is_staff: boolean;

    @Column({ defaultValue: false })
    is_email_verified: boolean;

    @Column({ defaultValue: false })
    is_password_autoset: boolean;

    @Column({ defaultValue: false })
    is_onboarded: boolean;

    @Column
    token: string;

    @Column({ defaultValue: 'VIETNAMESE' })
    billing_address_country: string;

    @Column
    billing_address: string;

    @Column
    has_billing_address: string;

    @Column
    USER_TIMEZONE_CHOICES: string;

    @Column({ type: sequelize.DATEONLY, defaultValue: sequelize.NOW })
    user_timezone: Date;

    @CreatedAt
    last_active: Date;

    @CreatedAt
    last_login_time: Date;

    @CreatedAt
    last_logout_time: Date;

    @Column
    last_login_ip: string;

    @Column
    last_logout_ip: string;

    @Column({ defaultValue: 'email' })
    last_login_medium: string;

    @Column
    last_login_uagent: string;

    @Column
    token_updated_at: Date;

    @Column({ type: DataType.JSON })
    my_issues_prop: string;

    @Column
    role: string;

    @Column({ defaultValue: false })
    is_bot: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    theme: string;

    @Column({ })
    display_name: string;

    @Column({ defaultValue: false })
    is_tour_completed: boolean;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_ONBOARDING })
    onboarding_step: string;
}