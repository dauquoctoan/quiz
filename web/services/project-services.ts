import { ICycle, ICycleUserProperties, IModule, IModuleUserProperties, IProject, IProjectMember, IWorkspace } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class ProjectService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async createProject<T>(project: IProject) {
        return await this.post<T>('project', project);
    }

    async getProjects<T>(workspaceId: string) {
        try {
            return await this.get<T>('project/by-user/' + workspaceId);
        } catch (error) {
            console.log(error)
        }
    }

    async getMemberByProject<T>(query: { projectId: string }) {
        try {
            return await this.get<T>('project-member', query)
        } catch (error) {
            console.log(error)
        }
    }

    async getProjectViewByMember<T>(query: { projectId: string }) {
        try {
            return await this.get<T>('project-member/project-view', query)
        } catch (error) {
            console.log(error)
        }
    }

    async getMemberByProjectMe<T>(query: { projectId: string }) {
        try {
            return await this.get<T>('project-member/me', query)
        } catch (error) {
            console.log(error)
        }
    }

    /* cycle */
    async createCycle<T>(projectId: string, query: Partial<ICycle>) {
        try {
            return await this.post<T>('cycle/' + projectId, query)
        } catch (error) {
            console.log(error)
        }
    }

    async findAllCyclesByProject<T>(projectId: string) {
        try {
            return await this.get<T>('cycle/' + projectId)
        } catch (error) {
            console.log(error)
        }
    }
    /* cycle */
    async createModule<T>(projectId: string, query: Partial<IModule>) {
        try {
            return await this.post<T>('module/' + projectId, query)
        } catch (error) {
            console.log(error)
        }
    }

    async findAllModulesByProject<T>(projectId: string) {
        try {
            return await this.get<T>('module/' + projectId)
        } catch (error) {
            console.log(error)
        }
    }

    async findOneProject<T>(projectId: string) {
        try {
            return await this.get<T>('project/by-id/' + projectId)
        } catch (error) {
            console.log(error)
        }
    }

    async updateProject<T>(projectId: string, data: IProject) {
        try {
            return await this.patch<T>('project/' + projectId, data)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProject<T>(projectId: string) {
        try {
            return await this.delete('project/' + projectId)
        } catch (error) {
            console.log(error)
        }
    }

    async joinProject<T>(data: { projectId: string }) {
        try {
            return await this.post<T>('project-member/join-project', data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateProjectMember<T>(projectMemberId:string, data: Partial<IProjectMember>) {
        try {
            return await this.patch<T>('project-member/' + projectMemberId, data)
        } catch (error) {
            console.log(error)
        }
    }

    async getCycleUserProperties(projectId:string, cycleId:string) {
        try {
            return await this.get<ICycleUserProperties>('cycle-user-properties/' + cycleId + '/project/' + projectId);
        } catch (error) {
            console.log(error)
        }
    }

    async updateCycleUserProperties(cycleUserPropertiesId:string, data: Partial<ICycleUserProperties>) {
        try {
            return await this.patch<ICycleUserProperties>('cycle-user-properties/' + cycleUserPropertiesId, data);
        } catch (error) {
            console.log(error)
        }
    }

    async getModuleUserProperties(projectId:string, moduleId:string) {
        try {
            return await this.get<IModuleUserProperties>('module-user-properties/' + moduleId + '/project/' + projectId);
        } catch (error) {
            console.log(error)
        }
    }

    async updateModuleUserProperties(cycleUserPropertiesId:string, data: Partial<IModuleUserProperties>) {
        try {
            return await this.patch<IModuleUserProperties>('cycle-user-properties/' + cycleUserPropertiesId, data);
        } catch (error) {
            console.log(error)
        }
    }

}

const projectService = new ProjectService();

export default projectService;
