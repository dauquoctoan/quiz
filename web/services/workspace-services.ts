import { IWorkspace, IWorkspaceMemberInvite } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class WorkSpaceService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    createWorkSpace<T>(workspace: IWorkspace) {
        return this.post<T>('workspace', workspace);
    }

    joinWorkspace<T>(data: { workspace_id: number, token: string }) {
        return this.post<T>('workspace-member', data)
    }

    async findWorkspaceById<T>(id: number) {
        return await this.get<T>('workspace/' + id)
    }

    async getAllWorkSpaces<T>() {
        return await this.get<T>('workspace');
    }

    createsWorkspaceMemberInvite<T>(workspaces: IWorkspaceMemberInvite[]) {
        return this.post<T>('workspace-member-invite/creates', workspaces);
    }

    findWorkspaceMemberInvite<T>() {
        return this.get<T>('workspace-member-invite/invitations');
    }

    async joinWorkspaceInWeb<T>(data: { data: string[] }) {
        try {
            return await this.post<T>('workspace-member-invite/join-workspace-member', data);
        } catch (error) {
            console.log(error)
        }
    }


    async getWorkspaceByUser<T>() {
        try {
            return await this.get<T>('workspace/workspaces-by-user');
        } catch (error) {
            console.log(error)
        }
    }

    async getMemberFromWorkspace<T>() {
        try {
            return await this.get<T>('workspace-member/members');
        } catch (error) {
            console.log(error)
        }
    }

    async removeMemberFromWorkspace(userId: string) {
        try {
            return await this.delete('workspace-member/' + userId);
        } catch (error) {
            console.log(error)
        }
    }
}

const workspaceService = new WorkSpaceService();

export default workspaceService;
