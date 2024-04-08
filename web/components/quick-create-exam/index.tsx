'use client';
import React, { useState } from 'react';
import TiptapPopover from '../ui/tiptap/tiptapPopover';
import TiptapPopoverField from '../ui/tiptap/tiptapPopoverField';
import uploadService from '@/services/uploadservice';
import examsService from '@/services/exams-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { JSONContent } from '@tiptap/core';

const QuickCreateExam = () => {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({});

    const info = useSelector(selectInfo);

    function handleFile(e: any) {
        let file = e.target.files[0];
        setFile(file);
    }

    async function handleUpload() {
        await uploadImage(file);
    }

    const uploadImage = async (file: any) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            const res = await uploadService.uploadImage(formData);
        } catch (error) {
            console.error(error);
        }
    };

    async function handleCreateExams(data: JSONContent) {
        const result = await examsService.createExams({
            user_id: info?.id,
            content: data,
            question_and_answer: data,
        });
    }

    function handleSetFormData(key: string, value: any) {
        if (key == 'content') {
            console.log(value);
            const dataConvert = value.content.reduce(
                (curentValue: any, item: any) => {
                    if (item.type == 'heading') {
                        return [
                            ...curentValue,
                            {
                                title:
                                    item.text ||
                                    item.content
                                        .map((e: any) => {
                                            return e.type === 'hardBreak'
                                                ? '<br/>'
                                                : e.text;
                                        })
                                        .join(' '),
                            },
                        ];
                    }
                    if (item.type == 'taskList') {
                        const lastValueItem = curentValue[0];

                        const itemConvert = item.content.map(() => {
                            return;
                        });

                        r;
                    }
                },
                [],
            );
            console.log(dataConvert);
        }
        setFormData({ ...formData, [key]: value });
    }

    return (
        <div className="flex items-center justify-center p-10 bg-theme-secondary ">
            <div className="w-full flex justify-between gap-4 min-h-[500px]">
                <div className="border rounded flex-1 p-3 flex flex-col gap-3 bg-theme-primary">
                    <h2 className="text-lg font-bold">Thêm mới đề</h2>
                    <div>
                        <div className="text-sm">Nhập Tên Tiêu đề:</div>
                        <input
                            onChange={(e) => {
                                handleSetFormData('title', e.target.value);
                            }}
                            placeholder="Nhập tên tiêu đề"
                            className="text-sm outline-none border rounded px-2 py-1"
                        />
                    </div>
                    <div>
                        <div className="text-sm">Soạn trước đề</div>
                        <TiptapPopover
                            className="mb-4 text-sm max-h-[100px] overflow-y-auto"
                            onChange={(e) => {
                                handleSetFormData('content', e);
                            }}
                        />
                    </div>
                </div>
                <div className="border rounded flex-1 p-3 bg-theme-primary">
                    <h2>Xem trước đề</h2>
                </div>
            </div>
        </div>
    );
};

export default QuickCreateExam;
