import { IWorkspace, IWorkspaceMemberInvite } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class UploadService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async uploadImage(image: FormData) {
        try {
            return await this.post('upload/image', image, {
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

const uploadService = new UploadService();

export default uploadService;
