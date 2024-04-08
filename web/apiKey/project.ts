import { TApiKey } from "./type";

export const LS_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `API_PROJECT_${project_id}` : null);

export const ISSUES_BY_PROJECT_ID = (project_id: TApiKey) => (project_id ? `ISSUES_BY_PROJECT_ID_${project_id}` : null);

export const STATES_KEY = (project_id: TApiKey) => (project_id ? `API_STATES${project_id}` : null);

export const MEMBER_KEY_BY_PROJECT = (project_id: TApiKey) => (project_id ? `API_MEMBER_KEY${project_id}` : null);

export const MEMBER_KEY_BY_WORKSPACE = 'API_MEMBER_KEY_BY_PROJECT';

export const ISSUE_VIEWS_KEY = 'ISSUE_VIEWS_KEY';

export const ISSUE_VIEW_KEY =  (issue_view_id: TApiKey) => (issue_view_id ? `API_VIEW_KEY${issue_view_id}` : null);

export const LABELS_BY_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `API_LABELS_BY_PROJECT${project_id}` : null);

export const CYCLES_BY_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `CYCLES_BY_PROJECT_KEY${project_id}` : null);

export const MODULEs_BY_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `MODULEs_BY_PROJECT_KEY${project_id}` : null);

