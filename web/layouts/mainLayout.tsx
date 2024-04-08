'use client';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const info = useSelector(selectInfo);

    return (
        <div>
            <div className="border-b py-2 px-4 flex items-center justify-between shadow-sm gap-3">
                <div className="flex-1 flex items-center justify-center">
                    <div className="">
                        <input className="outline-none border rounded-2xl px-2 py-1"></input>
                    </div>
                </div>

                <div className="w-[100px]">
                    <div className="p-3 bg-theme-secondary rounded-full w-fit cursor-pointer hover:bg-color-special-secondary">
                        <IoAddOutline />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div>{info?.display_name}</div>
                        <img
                            className="w-10 h-10 rounded-full"
                            alt={info?.avatar}
                            src={info?.avatar}
                        />
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default MainLayout;
