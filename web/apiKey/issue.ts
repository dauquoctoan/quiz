import { TApiKey } from ".";

export const LS_ALL_ISSUE = () => `API_ALL_ISSUE`;
export const LS_ISSUE_REACTIONS = (isseId: TApiKey) => (isseId ? `LS_ISSUE_REACTIONS_${isseId}` : null);
export const LS_ISSUE_LINK = (isseId: TApiKey) => (isseId ? `LS_ISSUE_LINK_${isseId}` : null);
