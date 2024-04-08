import { IFillterIssue, IIssue, IIssueViews, IIsueLink, IIsueReaction, ILabel, IUser, Istate } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';
import { JSONContent } from '@tiptap/core';

const { API_BASE_URL } = APP_CONFIG;

interface IExams{
    id: string;
    exams_title: string;
    user_id: string;
    user: IUser
    content: JSONContent
    question_and_answer: JSONContent;
}

class ExamsService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async createExams(data: Partial<IExams>) {
        try {
            return await this.post<IExams>('exams/', data);
        } catch (error) {
            console.log(error)
        }
    }

}

const examsService = new ExamsService();

export default examsService;
