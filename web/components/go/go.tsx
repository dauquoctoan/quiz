'use client';
import authService from '@/services/auth-services';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const Go = () => {
    const router = useRouter();
    async function handleCreateName(e: string) {
        const user = await authService.upDateUser({
            display_name: e,
            is_onboarded: true,
        });

        if (user) router.push('de-thi');
    }

    return (
        <div className="flex w-full h-full items-center justify-center">
            <div className="flex gap-2 items-center">
                <input
                    onKeyDown={async (e: any) => {
                        if (e.keyCode == 13 && e.target.value) {
                            handleCreateName(e.target.value);
                        }
                    }}
                    className="border outline-none rounded px-2 py-1"
                    placeholder="Tên"
                />
                <MdArrowRightAlt className="cursor-pointer text-lg" />
            </div>
        </div>
    );
};

export default Go;
