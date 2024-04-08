interface IBaseData {
    createdAt?: string;
    updatedAt?: string;
}

export type IParams = {
    workspaceSlug: string;
    issueViewId: string;
    projectid: string;
    cycleid: string;
    moduleid: string;
}
export interface IResult<T> {
    code: 0 | 1
    data: T
    message: string
    statusCode: number
}
export interface LinkProps {
    href: string;
    nickname?: string;
}

export type IData<T> = T | undefined;

export interface IUser extends IBaseData {
    USER_TIMEZONE_CHOICES?: string;
    avatar?: string;
    billing_address?: string;
    billing_address_country?: string;
    cover_image?: string;
    created_location?: string;
    display_name?: string;
    email?: string;
    first_name?: string;
    has_billing_address?: string;
    id?: string;
    is_active?: string;
    is_bot?: string;
    is_email_verified?: string;
    is_managed?: string;
    is_onboarded?: boolean;
    is_password_autoset?: string;
    is_password_expired?: string;
    is_staff?: string;
    is_superuser?: string;
    is_tour_completed?: string;
    last_location?: string;
    last_login_ip?: string;
    last_login_medium?: string;
    last_login_uagent?: string;
    last_logout_ip?: string;
    last_logout_time?: string;
    last_name?: string;
    last_workspace_id?: string;
    mobileNumber?: string;
    my_issues_prop?: string;
    onboarding_step?: {
        workspace_join: number;
        profile_complete: number;
        workspace_create: number;
        workspace_invite: number;
    };
    role?: string;
    token?: string;
    token_updated_at?: string;
    user_timezone?: string;
    username?: string;
}
export interface IInfo extends IUser {
    workspace?: IWorkspace | null;
}

export interface IWorkspace extends IBaseData {
    id?: string;
    owner?: string;
    user?: string;
    name?: string;
    logo?: string;
    slug?: string;
    organization_size?: string;
}

export interface IWorkspaceMemberInvite extends IBaseData {
    id?: string;
    workspace_id?: string;
    email?: string;
    accepted?: boolean;
    token?: string;
    message?: string;
    responded_at?: Date;
    workspace?: IWorkspace;
    role?: number;
}

export interface IProject extends IBaseData {
    id?: string;
    estimate_id?: string;
    created_by?: string;
    default_state?: number;
    default_assignee?: string;
    project_lead?: string;
    workspace_id?: string;
    name?: string;
    description?: string;
    description_text?: string;
    description_html?: string;
    network?: number;
    identifier?: string;
    emoji?: string;
    icon_prop?: string;
    module_view?: boolean;
    cycle_view?: boolean;
    issue_views_view?: boolean;
    page_view?: boolean;
    inbox_view?: boolean;
    cover_image?: string;
    archive_in?: number;
    close_in?: number;
    is_member?: boolean;
}

export interface Istate extends IBaseData {
    id: string;
    project_id?: string;
    project_detail?: IProject;
    created_by?: string;
    project_info?: IUser;
    name?: string;
    description?: string;
    color?: string;
    slug?: string;
    sequence?: number;
    group?: string;
    default?: boolean;
}

export interface IIssue extends IBaseData {
    id?: string;
    project_id?: string;
    workspace_id?: string;
    parent?: number;
    state_id?: string;
    estimate_point?: number;
    name?: string;
    description?: string;
    description_html?: string;
    description_stripped?: string;
    priority?: string;
    start_date?: string;
    target_date?: string;
    sequence_id?: string;
    sort_order?: number;
    completed_at?: string;
    archived_at?: string;
    is_draft?: boolean;
    state: Istate;
    assignees?: IUser[] | string[];
    labels?: ILabel[] | string[];
}
export interface ILabel extends IBaseData {
    id: string;
    project_id: string;
    created_at: string;
    workspace_id: string;
    parent: string;
    name: string;
    description: string;
    color: string;
}

export interface IFillterIssue {
    cycle_id?: string;
    projects?: string[];
    userId?: string;
    states?: string[];
    labels?: string[];
    priorities?: string[];
    createBys?: string[];
    assignees?: string[];
    subscribers?: string[];
    startDate?: string;
    dueDate?: string;
    startCustomFrom?: string;
    startCustomTo?: string;
    dueCustomFrom?: string;
    dueCustomTo?: string;
}

export interface IIssueViews {
    id?: string;
    name: string;
    description?: string;
    query?: IFillterIssue;
    access?: number;
    query_data?: string;
}

export type TLayout = "list" | "kanban" | "calendar" | "gantt" | "spreadsheet"; 

export interface IProjectMember {
    id: string;
    member: string;
    user: IUser;
    project_id: string;
    workspace_id: string;
    comment: string;
    role: 5|10|15|20|25;
    view_props: IView_props
    default_props: string;
    preferences: string;
    sort_order: string;
}

export interface IFilters{
    state: null,
    labels: null,
    priority: null,
    assignees: null,
    created_by: null,
    start_date: null,
    subscriber: null,
    state_group: null,
    target_date: null
}

export interface IDisplayFilters{
    type: null,
    layout: TLayout,
    group_by: null,
    order_by: string,
    sub_issue: boolean,
    show_empty_groups: boolean,
    calendar_date_range: string
}

export interface IDisplayProperties {
    key: boolean,
    link: boolean,
    state: boolean,
    labels: boolean,
    assignee: boolean,
    due_date: boolean,
    estimate: boolean,
    priority: boolean,
    created_on: boolean,
    start_date: boolean,
    updated_on: boolean,
    sub_issue_count: boolean,
    attachment_count: boolean
}

export interface IView_props{
    filters: IFilters,
    display_filters: IDisplayFilters,
    display_properties:IDisplayProperties
};

export interface ICycle {
    id: string;
    owned_by: string;
    created_by: string;
    project_id: string;
    workspace_id: string;
    project: IProject[];
    workspace: IWorkspace[];
    user_created: IUser;
    total: number;
    done: number;
    // cycle_issues: ICycleIssue[];
    // cycle_favorites: ICycleFavorite[];
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    view_props: string;
    sort_order: number;
}

export interface IModule {
    id: string;
    total: number;
    done: number;
    lead: string;
    user_lead: IUser;
    project_id: string;
    project: IProject;
    workspace_id: string;
    workspace: IWorkspace;
    member: string;
    user_member: IUser;
    name: string;
    description: string;
    description_text: string;
    description_html: string;
    start_date: Date;
    target_date: Date;
    status: string;
    view_props: string;
    sort_order: number;
}

export interface IWorkspaceMember {
    id: string;
    workspace_id: string;
    member: string;
    workspace: IWorkspace;
    user: IUser;
    role: 5 | 10 | 15 | 20 | 25;
    company_role: string;
    view_props: string;
    default_props: string;
}

export interface IIsueReaction{
    id: string;
    actor: string;
    issue_id: string;
    user: IUser;
    issue: IIssue;
    reaction: string;
}

export interface IIsueLink extends IBaseData{
    id: string;
    issue_id: string;
    issue: IIssue;
    title: string;
    url: string;
    metadata: string;
}

export interface ICycleUserProperties{
    id:string;
    cycle_id:string;
    user_id:string;
    project_id:string;
    filters: IFillterIssue;
    display_filters: IDisplayFilters;
    display_properties: IDisplayProperties;
    user: IUser;
    cycle: ICycle;
    project: IProject;
}

export interface IModuleUserProperties{
    id:string;
    module_id:string;
    user_id:string;
    project_id:string;
    filters: IFillterIssue;
    display_filters: IDisplayFilters;
    display_properties: IDisplayProperties;
    user: IUser;
    module: IModule;
    project: IProject;
}