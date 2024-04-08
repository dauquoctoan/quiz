'use client';
import React from 'react';
import AuthProvider from './authprovider';

interface IProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
    return (
        <AuthProvider>
            <div className="relative w-full h-screen flex">
                <div className="relative flex-1 w-full h-screen overflow-auto">
                    {children}
                </div>
            </div>
        </AuthProvider>
    );
};

export default AuthLayout;
